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
import Graph from "../../component/Graph/Graph";

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

export type IGraphData = {
  labels: [],
  datasets: {data: []}
}

const Dashboard: (navigationprops: NavigationInjectedProps) => JSX.Element = (navigationprops: NavigationInjectedProps) => {

  const [countryData, setCountryData] = useState<CountryDetails>([]);
  const [top5CountryData, setTop5CountryData] = useState<CountryDetails>([]);
  const [globalData, setGlobalData] = useState<CountryDetails>([]);
  const [graphData, setGraphData] = useState<IGraphData>(undefined);
  const { isLoading, error, data } = useQuery('covidSummary', () =>
      fetch('https://api.covid19api.com/summary').then(res => {
            console.log('useQuery', res.json().then(response => {
              console.log('response',response.Countries);
              setCountryData(response?.Countries);
              setGlobalData(response?.Global)
              const countriesdata = sortCovidEffectedCountries(response.Countries, 5)
              setTop5CountryData(countriesdata);
              // formGraphData();
              //return countriesdata;
            }));
          }
      )
  )

  const moveToDetailPage = () => {
    console.log('navigationprops', navigationprops);
    const {navigation} = navigationprops;
    console.log('navigation', navigation);
    navigation.navigate(Route.CountryList, {
      countryData,
    });
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

  useEffect(() => {
    console.log('formGraphData useEffect');
   formGraphData();
    return () => {};
  }, [top5CountryData]);

  function Top5CountriesList() {
    console.log('Top5CountriesList',countryData);
    // const queryClient = useQueryClient()
    //getTop5CountriesData();
   // const {status, data, error, isFetching} = FetchCovidSummary();
    return (
      <View style={{flex: 1, flexDirection: 'row', width: '100%', height: 220, paddingRight: 10}}>
        {top5CountryData?.length > 0 &&
        top5CountryData.map(country => (
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

   function formGraphData () {
    let labels: [string] = [];
    let data : [number] = [];
    top5CountryData.forEach(country => {
      console.log('graph country', country)
      labels.push(country.CountryCode);
      data.push(country.TotalConfirmed)
    })
    const graphData = {
      labels: labels,
      datasets: [{data: data}]
    }
    console.log('formGraphData data', graphData)
     return graphData;
  }

  return (
    <View style={styles.container}>
          <ScrollView style={styles.top5View}>
            <Top5CountriesList />
          </ScrollView>
            <View style={styles.graphView}>
            <Graph data={formGraphData()}/>
            </View>
              <View style={{ marginTop: 20, height: '40%' , backgroundColor:'red'}}>

              </View>
    </View>
  );
};
export default compose(withNavigation)(Dashboard);
