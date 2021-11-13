import React from "react";
import {Button, ScrollView, Text, View} from 'react-native';
import styles from './styles'
import {flowRight as compose} from 'lodash';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {FetchAllCountries} from "../../network/NetworkManager";

const CountriesListPage: React.FC<{
    title: string;
}> = (navigationprops: NavigationInjectedProps) => {
  const goBack = () => {
    console.log('navigationprops', navigationprops);
    navigationprops.navigation.navigate('_Dashboard');
  };

  function AllCountriesList() {
    console.log('AllCountriesList');
        const {status, data, error, isFetching} = FetchAllCountries();
        const countriesdata = data
            ? data
            : [];
        console.log('Posts data', data);
        return (
            <>
                {countriesdata?.length > 0 &&
                countriesdata.map(country => (
                    <View key={country.ISO2}>
                        <Text>{country.Country}</Text>
                        <Text>{country.TotalConfirmed}</Text>
                    </View>
                ))}
            </>
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <Text>Details</Text>
            <Button
                onPress={goBack}
                title="See More"
                color="#841584"
                accessibilityLabel="Learn more about other countries clicking this button"
            />
            <ScrollView>
                <AllCountriesList />
            </ScrollView>

        </View>
    )
}
export default compose(withNavigation) (CountriesListPage);
