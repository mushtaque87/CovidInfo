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
import Route from "../../utils/route";
import {borderRadius} from "../../common/common-styles";



export type CountryInfo = {
    Country: string;
    ISO2: string;
    Slug: string;
};



const CountriesListPage: React.FC<{
    title: string;
}> = (navigationprops: NavigationInjectedProps) => {
  // const goBack = () => {
  //   console.log('navigationprops', navigationprops);
  //   navigationprops.navigation.navigate('Dashboard');
  // };
    const [searchedCountry, setSearchedCountry] = useState('');
    const [countriesData, setCountriesData] = useState<CountryDetails>(undefined);
    const [filteredCountriesData, setFilteredCountriesData] = useState<CountryDetails>([]);


    // const { isLoading, error, data } = useQuery('countryList', () =>
    //     fetch('https://api.covid19api.com/countries').then(res => {
    //         console.log('useQuery',res);
    //             res.json().then(response => {
    //                 console.log('response',response);
    //                 setCountriesData(response);
    //                 setFilteredCountriesData(response)
    //             });
    //         }
    //     )
    // )

    // function fetchCountriesDetails(countryName: string) {
    //     console.log('countryName',countryName);
    // }

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
       // setCountriesData(countrydetails)
        const countrydetails = navigationprops.route.params.countryData
        console.log('countrydetails',countrydetails);
        setCountriesData(countrydetails);
        //setFilteredCountriesData(countrydetails);
    },[]);

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
    }, [countriesData,searchedCountry]);

    const updateSearch = search => {
        setSearchedCountry(search);
    };
    function getItemKey(country: CountryInfo) {
        return country?.ISO2;
    }

    const navigateToDetailPage = (countryName: string) => {
        console.log('navigationprops', navigationprops);
        const {navigation} = navigationprops;
        console.log('navigation', navigation);
        console.log('countryName',countryName);
        navigation.navigate(Route.DetailPage, {
            countryName,
        });
    };

    function onRenderItem(country: CountryInfo): JSX.Element {
       // console.log('onRenderItem', country);
       //  const { isLoading, error, data } = useQuery('countrySummary', () =>
       //      fetch('https://api.covid19api.com/countries').then(res => {
       //              console.log('useQuery',res);
       //              res.json().then(response => {
       //                  console.log('response',response);
       //                  setCountriesData(response);
       //                  setFilteredCountriesData(response)
       //              });
       //          }
       //      )
       //  )
        const {item} = country;
        return (
            <Touchable style={{backgroundColor: '#E5E5E5' , marginVertical: 5}} onPress={() => {
                navigateToDetailPage(item.Country);
            }}>
                <View style={{flex: 1 , flexDirection: 'column'}}>
                <View key={item.ISO2} style={{flex: 1, flexDirection: 'row' , marginVertical: 30}}>
                    <CountryFlag isoCode={item.CountryCode} size={20} />
                    <Text style={styles.countryTitle}> {item.Country}</Text>
                    {/*<Text>{country.TotalConfirmed}</Text>*/}
                </View>
                    <View style={{backgroundColor : '#fff'}}>
                        <Text style={styles.countryDetailsTitle} > Confirmed : {item.TotalConfirmed}</Text>
                        <Text style={styles.countryDetailsTitle}> Death : {item.TotalDeaths}</Text>
                        <Text style={styles.countryDetailsTitle}> Recovered : {item.TotalRecovered}</Text>
                    </View>
                </View>
            </Touchable>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style ={styles.searchbar}
                value={searchedCountry}
                onChangeText={updateSearch}
                placeholder="Search Country"
                returnKeyType="search"
                underlineColorAndroid="transparent"
            />
            <FlatList
                data={filteredCountriesData}
                keyExtractor={getItemKey}
                renderItem={onRenderItem}
                style={{borderRadius: 5}}
            />
        </View>
    );
}
export default compose(withNavigation) (CountriesListPage);
