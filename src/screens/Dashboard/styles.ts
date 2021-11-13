import {StyleSheet} from "react-native";
import {brandColors} from "../../common/common-styles";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '100%',
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:'red',
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
        width: '100%',
        height: '50%',
        backgroundColor:'blue',
    },
    top5CountryListView:{
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
    },
    top5CountryTitle:{
        fontSize: 30, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold"
    },
    top5CountryConfirmationTitle:{
        fontSize: 20, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold"
    }
});

export default styles;
