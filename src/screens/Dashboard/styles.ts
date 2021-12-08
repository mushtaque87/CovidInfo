import {StyleSheet} from "react-native";
import {brandColors} from "../../common/common-styles";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        paddingHorizontal:10,
        paddingVertical:20,
    },
    graphView: {
        width: '30%'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    top5View:{
        height: 120,
        // backgroundColor:'green',
        flexDirection: 'row'
    },
    top5CountryListView:{
        width: '20%',
        height: 150,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        marginRight: 10,
        padding: 10,
    },
    slideContainer: {
        height: 400,
        width: '100%',
        backgroundColor: 'red',
        paddingRight: 20,
    },
    top5CountryTitle:{
        fontSize: 25, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold", marginLeft: 10
    },
    top5CountryConfirmationTitle:{
        fontSize: 20, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold" , marginLeft: 10
    }
});

export default styles;
