import React from "react";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Button, Text, View} from 'react-native';
import styles from './styles'
import Route from "../../utils/route";
import {flowRight as compose} from 'lodash';
import {NavigationInjectedProps, withNavigation} from "react-navigation";

const DetailPage: React.FC<{
    title: string;
}> = (navigationprops: NavigationInjectedProps) => {
    const goBack = () => {
        console.log('navigationprops',navigationprops);
        navigationprops.navigation.navigate('_Dashboard');
        // const {navigation} = navigationprops;
        // console.log('navigation',navigation);
        // navigation.navigate(Route.DetailPage)
    }

    return (
        <View style={styles.sectionContainer}>
            <Text>
                DetailPage
            </Text>
            <Button
                onPress={goBack}
                title="back"
                color="#841584"
                accessibilityLabel="Learn more about other countries clicking this button"
            />
        </View>
    )
}
export default compose(withNavigation) (DetailPage);
