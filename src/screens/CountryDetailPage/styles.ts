import {StyleSheet} from "react-native";
import {brandColors} from "../../common/common-styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '100%',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    top5CountryTitle:{
        fontSize: 25, paddingLeft: 20, color: brandColors.petrol, fontWeight:'700', marginLeft: 10
    },
})

export default styles;
