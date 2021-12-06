import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';
import Route from '../../utils/route';
import {flowRight as compose} from 'lodash';
import {useQuery, useQueryClient} from 'react-query';
import axios from 'axios';
import {FetchCovidSummary} from '../../network/NetworkManager';
import Touchable from "../../common/touchable";
import CountryFlag from "react-native-country-flag";
import SwipeableViews from "react-swipeable-views-native";
import create from 'zustand'

export type CountryDetails = {
  Country: string;
  CountryCode: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  NewDeaths: number;
  NewConfirmed: number;
  NewRecovered: number;
  ID: string;
  Date: string;
};


const Dashboard: (navigationprops: NavigationInjectedProps) => JSX.Element = (navigationprops: NavigationInjectedProps) => {

  const [countryData, setCountryData] = useState<CountryDetails>([]);
  const { isLoading, error, data } = useQuery('covidSummary', () =>
      fetch('https://api.covid19api.com/summary').then(res => {
            console.log('useQuery', res.json().then(response => {
              console.log('response',response.Countries);
              const countriesdata = sortCovidEffectedCountries(response.Countries, 5)
              setCountryData(countriesdata);
              //return countriesdata;
            }));
          }
      )
  )

  const moveToDetailPage = () => {
    console.log('navigationprops', navigationprops);
    const {navigation} = navigationprops;
    console.log('navigation', navigation);
    navigation.navigate(Route.DetailPage);
  };

  const sortCovidEffectedCountries = (data, top: number) => {
    data?.sort(function (obj1, obj2) {
      return obj2.TotalConfirmed - obj1.TotalConfirmed;
    });
    return data?.slice(0, top);
  };

  // const getTop5CountriesData = (data: [CountryDetails]) => {
  //   // const {status, data, error, isFetching} = FetchCovidSummary();
  //   const countriesdata = data
  //     ? sortCovidEffectedCountries(data.Countries, 5)
  //     : [];
  //   console.log('countriesdata', countriesdata);
  //   // setCountryData(data);
  // }

 // async function trythis () {
 //    console.log('trythis');
 //    const {status, data, error, isFetching} = FetchCovidSummary();
 //    const {data} = await axios.get('https://api.covid19api.com/summary');
 //    const countriesdata = []
 //        ? sortCovidEffectedCountries(data.Countries, 5)
 //        : [];
 //    console.log('countriesdata', countriesdata);
 //     setCountryData(countriesdata);
 //  }

  // useEffect(() => {
  //   // trythis();
  //   return () => {};
  // }, []);

  function Top5CountriesList() {
    console.log('Top5CountriesList',countryData);
    // const queryClient = useQueryClient()
    //getTop5CountriesData();
   // const {status, data, error, isFetching} = FetchCovidSummary();
    return (
      <View style={{flex: 1, flexDirection: 'row', width: '100%', height: 220, paddingRight: 10}}>
        {countryData?.length > 0 &&
        countryData.map(country => (
            // <SwipeableViews style={styles.slideContainer}>
            <Touchable style={styles.top5CountryListView} key={country.TotalConfirmed} onPress={() => {
                console.log('country pressed', country.Country);
                moveToDetailPage();
              }}>
              {/*<View style={{backgroundColor:'green'}}>*/}
              <View style={{flex: 1, flexDirection: 'row' , alignItems: 'center'}}>
                <CountryFlag isoCode={country.CountryCode} size={30} />
                <Text style={styles.top5CountryTitle}>{country.Country}</Text>
              </View>

              <Text style={styles.top5CountryConfirmationTitle}>
                {country.TotalConfirmed}
              </Text>
              {/*</View>*/}
            </Touchable>
            // </SwipeableViews>
          ))}
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/*<Text>Dashboard</Text>*/}
      {/*<ScrollView>*/}
        {/*{postId > -1 ? (*/}
          <ScrollView style={styles.top5View}>
         <Top5CountriesList />
          </ScrollView>
        {/*):null}*/}
        {/*<Button*/}
        {/*  onPress={moveToDetailPage}*/}
        {/*  title="See More"*/}
        {/*  color="#841584"*/}
        {/*  accessibilityLabel="Learn more about other countries clicking this button"*/}
        {/*/>*/}
      {/*</ScrollView>*/}
    </View>
  );
};
export default compose(withNavigation)(Dashboard);
