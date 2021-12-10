import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Graph from '../Graph/Graph';

function GlobalCard({globalData}) {
  function formGlobalGraphData() {
    console.log('formGlobalGraphData', globalData);
    if (!globalData) {
      return {
        labels: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered'],
        datasets: [
          {
            data: [0, 0, 0],
          },
        ],
      };
    }
    const data = {
      labels: ['Confirmed', 'Deaths', 'Recovered'],
      datasets: [
        {
          data: [
            globalData.TotalConfirmed || 0,
            globalData.TotalDeaths || 0,
            globalData.TotalRecovered || 0,
          ],
          color: (opacity = 1) => `rgba(34, 198, 34, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };
    return data;
  }

  return (
    <View style={[styles.container, {marginTop: 20, width: '100%'}]}>
      <Text style={[styles.dataTitle]}> Global Data: </Text>
      <View>
        <Text style={[styles.globalDataTitle]}>
          {' '}
          {`Total Confirmed: ${globalData.TotalConfirmed}`}
        </Text>
        <Text style={[styles.globalDataTitle]}>
          {' '}
          {`Total Death: ${globalData.TotalDeaths}`}
        </Text>
        <Text style={[styles.globalDataTitle]}>
          {' '}
          {`Total Recovered: ${globalData.TotalRecovered}`}
        </Text>
        <View style={[styles.graphView, {marginTop: 20}]}>
          {globalData ? (
            <Graph
              data={formGlobalGraphData()}
              graphType={'Line'}
              height={200}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

export default GlobalCard;
