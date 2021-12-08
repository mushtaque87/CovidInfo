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

function Graph({data, graphType, height}) {
    console.log('graph data render ', data);
    if(!data || data?.datasets?.data?.length === 0) {
        return  null
    }

    const chartConfig = () => {
        return {
            backgroundColor: "#e26100",
            backgroundGradientFrom: "#fb2c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 155, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
            borderRadius: 16,
            },
            propsForDots: {
                r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
            }
        }
    }


        switch(graphType) {
            case 'Bar':
                return (
                <BarChart
                    // style={graphStyle}
                    data={data}
                    width={Dimensions.get("window").width - 20}
                    height={height}
                    yAxisLabel=""
                    chartConfig={chartConfig()}
                    verticalLabelRotation={30}
                />
                )
            case 'Pie':
                return (
                    <PieChart
                        data={data}
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        chartConfig={chartConfig()}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[10, 50]}
                        absolute
                    />
                )
        }


}

export default (Graph);
