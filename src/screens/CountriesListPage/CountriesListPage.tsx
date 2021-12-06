import React, {useState} from "react";
import {Button, ScrollView, Text, View} from 'react-native';
import styles from './styles'
import {flowRight as compose} from 'lodash';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {FetchAllCountries} from "../../network/NetworkManager";
import CountryFlag from "react-native-country-flag";
import {useQuery} from "react-query";
import {CountryDetails} from "../Dashboard/Dashboard";
import Touchable from "../../common/touchable";

const CountriesListPage: React.FC<{
    title: string;
}> = (navigationprops: NavigationInjectedProps) => {
  // const goBack = () => {
  //   console.log('navigationprops', navigationprops);
  //   navigationprops.navigation.navigate('Dashboard');
  // };

    const [countriesData, setCountriesData] = useState<CountryDetails>([]);
    const { isLoading, error, data } = useQuery('countryList', () =>
        fetch('https://api.covid19api.com/countries').then(res => {
            console.log('useQuery',res);
                res.json().then(response => {
                    console.log('response',response);
                    setCountriesData(response);
                });
            }
        )
    )

    function fetchCountriesDetails(countryName: string) {
        console.log('countryName',countryName);
    }

  function AllCountriesList() {
    console.log('AllCountriesList', countriesData);
        return (
            <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
                {countriesData?.length > 0 &&
                countriesData.map(country => (
                    <Touchable onPress={() => {
                        fetchCountriesDetails(country.Country);
                    }}>
                    <View key={country.ISO2} style={{flex: 1, flexDirection: 'row' , marginVertical: 10}}>
                        <CountryFlag isoCode={country.ISO2} size={20} />
                        <Text style={styles.top5CountryTitle}>  {country.Country}</Text>
                        {/*<Text>{country.TotalConfirmed}</Text>*/}
                    </View>
                    </Touchable>
                ))}
            </View>
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <ScrollView>
                <AllCountriesList />
            </ScrollView>

        </View>
    )
}
export default compose(withNavigation) (CountriesListPage);
