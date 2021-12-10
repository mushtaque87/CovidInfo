import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import styles from './styles';
import {flowRight as compose} from 'lodash';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';
import {FetchAllCountries} from '../../network/NetworkManager';
import CountryFlag from 'react-native-country-flag';
import {CountryDetails} from '../Dashboard/Dashboard';
import Touchable from '../../common/touchable';
import Route from '../../utils/route';
import {borderRadius, brandColors} from '../../common/common-styles';
import SegmentedControlTab from "react-native-segmented-control-tab";
import {sortCountriesOnCaseType} from "../../utils/helper";

export type CountryInfo = {
  Country: string;
  ISO2: string;
  Slug: string;
};

const CountriesListPage: React.FC<{}> = (
  navigationprops: NavigationInjectedProps,
) => {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [countriesData, setCountriesData] = useState<CountryDetails>(undefined);
  const [filteredCountriesData, setFilteredCountriesData] = useState<CountryDetails>([]);
  const [sortCaseTypeIndex, setSortCaseTypeIndex] = useState(0);
  const [sortTypeIndex, setSortTypeIndex] = useState(0);

  useEffect(() => {
    const countrydetails = navigationprops.route.params.countryData;
    console.log('countrydetails', countrydetails);
    setCountriesData(countrydetails);
  }, []);

  useEffect(() => {
    if (searchedCountry.length === 0) {
      setFilteredCountriesData(countriesData);
    } else {
      const searchedCountries = countriesData?.filter(e => {
        return e?.Country.toUpperCase().includes(searchedCountry.toUpperCase());
      });
      setFilteredCountriesData(searchedCountries);
    }
  }, [countriesData, searchedCountry]);

  useEffect(() => {
    console.log('sort data',sortCaseTypeIndex, sortTypeIndex);
    const data = sortCountriesOnCaseType(filteredCountriesData,sortCaseTypeIndex, sortTypeIndex);
    console.log('sorted data',data);
    setFilteredCountriesData(data);
  }, [sortCaseTypeIndex, sortTypeIndex]);

  const updateSearch = search => {
    setSearchedCountry(search);
  };

  function getItemKey(country: CountryInfo) {
    return country?.ISO2;
  }

  function handleCaseTypeIndexChange(index: number) {
    console.log('handleCaseTypeIndexChange',index);
    // const data = sortCountriesOnCaseType(filteredCountriesData,index);
    // console.log('sorted data',data);
    // setFilteredCountriesData(data);
    setSortCaseTypeIndex(index);
  }

  function handleSortTypeIndexChange(index: number) {
    console.log('handleSortTypeIndexChange',index);
    // const data = sortCountriesOnCaseType(filteredCountriesData,index);
    // console.log('sorted data',data);
    // setFilteredCountriesData(data);
    setSortTypeIndex(index);
  }

  function onRenderItem(country: CountryInfo): JSX.Element {
    const {item} = country;
    return (
      <Touchable key={item.ISO2} style={styles.cardView}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View key={item.ISO2} style={styles.countryCardView}>
            <Text style={[styles.countryTitle, {marginRight: 10}]}>
              {' '}
              {item.Country}
            </Text>
            <CountryFlag isoCode={item.CountryCode} size={20} />
          </View>
          <Text style={styles.countryDetailsTitle}>
            {' '}
            Confirmed : {item.TotalConfirmed}
          </Text>
          <Text style={styles.countryDetailsTitle}>
            {' '}
            Death : {item.TotalDeaths}
          </Text>
          <Text style={styles.countryDetailsTitle}>
            {' '}
            Recovered : {item.TotalRecovered}
          </Text>
        </View>
      </Touchable>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbar}
        value={searchedCountry}
        onChangeText={updateSearch}
        placeholder="Search Country"
        returnKeyType="search"
        underlineColorAndroid="transparent"
      />
      <View   style ={{ marginVertical: 10}}>
        <SegmentedControlTab
            tabStyle={{backgroundColor:'#E5E5E5'}}
            values={["Confirmed", "Dealth", "Recovered"]}
            selectedIndex={sortCaseTypeIndex}
            onTabPress={handleCaseTypeIndexChange}
        />
      </View>
      <View   style ={{ marginVertical: 10}}>
        <SegmentedControlTab
            tabStyle={{backgroundColor:'#E5E5E5'}}
            values={["High to Low", "Low to High"]}
            selectedIndex={sortTypeIndex}
            onTabPress={handleSortTypeIndexChange}
        />
      </View>

      <FlatList
        data={filteredCountriesData}
        keyExtractor={getItemKey}
        renderItem={onRenderItem}
        style={{borderRadius: 5}}
      />
    </View>

  );
};
export default compose(withNavigation)(CountriesListPage);
