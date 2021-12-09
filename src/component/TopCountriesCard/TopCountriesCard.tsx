import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Touchable from '../../common/touchable';
import CountryFlag from 'react-native-country-flag';
import React from 'react';

function TopCountriesCard({data, onPress}) {
  return (
    <ScrollView style={styles.top5View}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={[styles.dataTitle]}> Top 5 Countries: </Text>
        <View style={styles.cardView}>
          {data?.length > 0 &&
            data.map(country => (
              // <SwipeableViews style={styles.slideContainer}>
              <Touchable
                style={styles.top5CountryListView}
                key={country.TotalConfirmed}
                onPress={() => {
                  console.log('country pressed', country.Country);
                  onPress();
                }}>
                {/*<View style={{backgroundColor:'green'}}>*/}
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <CountryFlag isoCode={country.CountryCode} size={30} />
                  <Text style={styles.top5CountryTitle}>{country.Country}</Text>
                </View>
                <Text style={styles.top5CountryConfirmationTitle}>
                  Total Confirmed:
                </Text>
                <Text style={styles.top5CountryConfirmationTitle}>
                  {country.TotalConfirmed}
                </Text>
                {/*</View>*/}
              </Touchable>
              // </SwipeableViews>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default TopCountriesCard;
