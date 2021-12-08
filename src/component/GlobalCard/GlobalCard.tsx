import React from 'react';
import {Text, View} from "react-native";
import styles from "../../screens/CountriesListPage/styles";

function GlobalGraph({data}) {

    return (
        <View>
            <View>
            <Text> Global Data </Text>
            </View>
            <View>
                <View style={{backgroundColor : '#fff'}}>
                    <Text style={styles.countryDetailsTitle} > Confirmed : {data.TotalConfirmed}</Text>
                    <Text style={styles.countryDetailsTitle}> Death : {data.TotalDeaths}</Text>
                    <Text style={styles.countryDetailsTitle}> Recovered : {data.TotalRecovered}</Text>
                </View>
            </View>
        </View>
    )

}
