import React from 'react';
import {LineChart, BarChart, PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

//const Graph: (data) => JSX.Element = (data) => {
export type IGraphData = {
  labels: [];
  datasets: {data: []};
};

enum ChartType {
  Bar = 'Dashboard',
  Pie = 'CountryList',
  Line = 'CountryDetails',
}

function Graph({data, graphType, height}) {
  console.log('graph data render ', data);
  if (!data || data?.datasets?.data?.length === 0) {
    return null;
  }

  const chartConfig = () => {
    return {
      backgroundColor: '#e26100',
      backgroundGradientFrom: '#23a455',
      backgroundGradientTo: '#008337',
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 155, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#FFFF00',
      },
    };
  };

  switch (graphType) {
    case 'Bar':
      return (
        <BarChart
          // style={graphStyle}
          data={data}
          width={Dimensions.get('window').width - 30}
          height={height}
          yAxisLabel=""
          chartConfig={chartConfig()}
          verticalLabelRotation={30}
        />
      );
    case 'Pie':
      return (
        <PieChart
          data={data}
          width={Dimensions.get('window').width - 20}
          height={220}
          chartConfig={chartConfig()}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[10, 50]}
          absolute
        />
      );
    case 'Line':
      return (
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 30}
          height={height}
          chartConfig={chartConfig()}
        />
      );
  }
}

export default Graph;
