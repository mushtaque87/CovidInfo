import React from 'react';
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

const Dashboard: React.FC = (navigationprops: NavigationInjectedProps) => {
  // const [postId, setPostId] = React.useState(-1);

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

  function Top5CountriesList() {
    //console.log('Top5CountriesList');
    // const queryClient = useQueryClient();
    const {status, data, error, isFetching} = FetchCovidSummary();
    const countriesdata = data
      ? sortCovidEffectedCountries(data.Countries, 5)
      : [];
    //console.log('Posts data', data);
    return (
      <>
        {countriesdata?.length > 0 &&
          countriesdata.map(country => (
            <Touchable style={styles.top5CountryListView} key={country.TotalConfirmed} onPress={() => {
                console.log('country pressed', country.Country);
                moveToDetailPage();
              }}>
              <Text style={styles.top5CountryTitle}>{country.Country}</Text>
              <Text style={styles.top5CountryConfirmationTitle}>{country.TotalConfirmed}</Text>
            </Touchable>
          ))}
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      {/*<ScrollView>*/}
        {/*{postId > -1 ? (*/}
          <ScrollView style={styles.top5View}>
        <Top5CountriesList />
          </ScrollView>
        {/*):null}*/}
        <Button
          onPress={moveToDetailPage}
          title="See More"
          color="#841584"
          accessibilityLabel="Learn more about other countries clicking this button"
        />
      {/*</ScrollView>*/}
    </View>
  );
};
export default compose(withNavigation)(Dashboard);
