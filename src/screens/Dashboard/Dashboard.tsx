import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';
import Route from '../../utils/route';
import {flowRight as compose} from 'lodash';
import {useQuery, useQueryClient} from 'react-query';
import Graph from '../../component/Graph/Graph';
import GlobalCard from '../../component/GlobalCard/GlobalCard';
import TopCountriesCard from '../../component/TopCountriesCard/TopCountriesCard';
import {sortCovidEffectedCountries} from '../../utils/helper';
import Loader from '../../common/Loader';
import {fetchCovidSummary} from '../../network/NetworkManager';
import {useFocusEffect} from '@react-navigation/native';

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

const Dashboard: (navigationprops: NavigationInjectedProps) => JSX.Element = (
  navigationprops: NavigationInjectedProps,
) => {
  const enabledRef = useRef(false);
  const [countryData, setCountryData] = useState<CountryDetails>(
    data?.Countries,
  );
  const [top5CountryData, setTop5CountryData] = useState<CountryDetails>([]);
  const [globalData, setGlobalData] = useState<CountryDetails>([]);

  const fetchSummary = () => {
    console.log('fetchSummary');
    fetch('https://api.covid19api.com/summary').then(res => {
      console.log(
        'useQuery',
        res.json().then(response => {
          console.log('response', response.Countries);
          setCountryData(response?.Countries);
          setGlobalData(response?.Global);
          const countriesdata = sortCovidEffectedCountries(
            response.Countries,
            5,
          );
          setTop5CountryData(countriesdata);
        }),
      );
    });
  };

  useFocusEffect(
    useCallback(() => {
      console.log('useFocusEffect', enabledRef);
      if (enabledRef.current) {
        fetchSummary();
      } else {
        enabledRef.current = true;
      }
    }, []),
  );

  const {isLoading, error, data} = useQuery('covidSummary', fetchSummary);

  const moveToDetailPage = () => {
    console.log('navigationprops', navigationprops);
    const {navigation} = navigationprops;
    console.log('navigation', navigation);
    navigation.navigate(Route.CountryList, {
      countryData,
    });
  };

  useEffect(() => {
    console.log('formGraphData useEffect');
    return () => {};
  }, [top5CountryData]);

  function formTop5GraphData() {
    let labels: [string] = [];
    let data: [number] = [];
    top5CountryData.forEach(country => {
      // console.log('graph country', country)
      labels.push(country.CountryCode);
      data.push(country.TotalConfirmed);
    });
    const graphData = {
      labels: labels,
      datasets: [{data: data}],
    };
    console.log('formGraphData data', graphData);
    return graphData;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.graphView}>
        <TopCountriesCard data={top5CountryData} onPress={moveToDetailPage} />
        <Graph data={formTop5GraphData()} graphType={'Bar'} height={200} />
      </View>
      <GlobalCard globalData={globalData} />
    </ScrollView>
  );
};
export default compose(withNavigation)(Dashboard);
