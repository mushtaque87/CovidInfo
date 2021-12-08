import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import { Dimensions } from "react-native";

//const Graph: (data) => JSX.Element = (data) => {

function Graph({data}) {
    console.log('graph data render ', data);
    if(!data || data.datasets.data?.length === 0) {
        return  null
    }
    return (
    <BarChart
        // style={graphStyle}
        data={data}
        width={Dimensions.get("window").width - 20}
        height={220}
        yAxisLabel="$"
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}
        verticalLabelRotation={30}
    />
    )
}

export default (Graph);
