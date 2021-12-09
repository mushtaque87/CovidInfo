import React, {FunctionComponent} from "react";
import {Text, View} from "react-native";
import styles from "../screens/Dashboard/styles";

const Loader: FunctionComponent = ({}) => {
    return (
        <View style={{flex : 1, width : '100%', height : '100%' , alignItems : 'center'}}>
            <Text style={[styles.dataTitle]}> Loading...</Text>
        </View>
    )
}

export default Loader
