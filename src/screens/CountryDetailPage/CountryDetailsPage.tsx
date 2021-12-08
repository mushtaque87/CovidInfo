import React, {useEffect, useState} from "react";
import {Button, ScrollView, Text, View, FlatList, TextInput} from 'react-native';
import styles from './styles'
import {flowRight as compose} from 'lodash';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {FetchAllCountries} from "../../network/NetworkManager";
import CountryFlag from "react-native-country-flag";
import {useQuery} from "react-query";
import {CountryDetails} from "../Dashboard/Dashboard";
import Touchable from "../../common/touchable";



export type CountryInfo = {
    Country: string;
    ISO2: string;
    Slug: string;
};



const CountriesDetailsPage: React.FC<{
    country: string;
}> = (navigationprops: NavigationInjectedProps) => {
     const countryName = navigationprops.route.params.countryName
    console.log('Fetch Details for country: ', countryName);
    // const goBack = () => {
    //   console.log('navigationprops', navigationprops);
    //   navigationprops.navigation.navigate('Dashboard');
    // };
    const [searchedCountry, setSearchedCountry] = useState('');
    const [countriesData, setCountriesData] = useState<CountryDetails>([]);
    const [filteredCountriesData, setFilteredCountriesData] = useState<CountryDetails>([]);
    const { isLoading, error, data } = useQuery('countryList', () =>
        fetch('https://api.covid19api.com/countries').then(res => {
                console.log('useQuery',res);
                res.json().then(response => {
                    console.log('response',response);
                    setCountriesData(response);
                    setFilteredCountriesData(response)
                });
            }
        )
    )

    function fetchCountriesDetails(countryName: string) {
        console.log('countryName',countryName);
    }

    // function AllCountriesList() {
    //   console.log('AllCountriesList', countriesData);
    //       return (
    //           <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
    //               {countriesData?.length > 0 &&
    //               countriesData.map(country => (
    //                   <Touchable onPress={() => {
    //                       fetchCountriesDetails(country.Country);
    //                   }}>
    //                   <View key={country.ISO2} style={{flex: 1, flexDirection: 'row' , marginVertical: 10}}>
    //                       <CountryFlag isoCode={country.ISO2} size={20} />
    //                       <Text style={styles.top5CountryTitle}>  {country.Country}</Text>
    //                       {/*<Text>{country.TotalConfirmed}</Text>*/}
    //                   </View>
    //                   </Touchable>
    //               ))}
    //           </View>
    //       );
    //   }

    // return (
    //     <View style={styles.sectionContainer}>
    //         <ScrollView>
    //             <AllCountriesList />
    //         </ScrollView>
    //
    //     </View>
    // )

    useEffect(() => {
        if (searchedCountry.length === 0) {
            // const sortedCountries = sortCountryCodes(items);
            setFilteredCountriesData(countriesData);
        } else {
            const searchedCountries = countriesData?.filter(e => {
                return e?.Country
                    .toUpperCase()
                    .includes(searchedCountry.toUpperCase());
            });

            setFilteredCountriesData(searchedCountries);
        }
    }, [countriesData, searchedCountry]);

    const updateSearch = search => {
        setSearchedCountry(search);
    };
    function getItemKey(country: CountryInfo) {
        return country?.ISO2;
    }


    function onRenderItem(country: CountryInfo): JSX.Element {
        // console.log('onRenderItem', country);
        const {item} = country;
        return (
            <Touchable onPress={() => {
                fetchCountriesDetails(item.Country);
            }}>

                <View key={item.ISO2} style={{flex: 1, flexDirection: 'row' , marginVertical: 10, backgroundColor: 'red'}}>
                    <CountryFlag isoCode={item.ISO2} size={20} />
                    <Text style={styles.top5CountryTitle}>  {item.Country}</Text>
                    {/*<Text>{country.TotalConfirmed}</Text>*/}
                </View>
                <View style={{ height: '50%', backgroundColor : 'green'}}>
                    <Text> Confirmed : </Text>
                </View>
            </Touchable>
        );
    }

    return (
        <View
            style={styles.container}>
          <Text> Country Details</Text>
        </View>
    );
}
export default compose(withNavigation) (CountriesDetailsPage);
