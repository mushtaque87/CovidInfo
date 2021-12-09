import {StyleSheet} from "react-native";
import {brandColors} from "../../common/common-styles";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 5,
    },
    globalDataTitle:{
        fontSize: 14, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold" , marginLeft: 10
    },
    dataTitle:{
        fontSize: 25, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold", marginLeft: 10
    },
    graphView: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
    },
});

export default styles;
