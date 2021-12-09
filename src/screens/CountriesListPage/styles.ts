import {StyleSheet} from "react-native";
import {brandColors} from "../../common/common-styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,

    },
    countryTitle:{
        fontSize: 25, paddingLeft: 20, color: '#fff', fontWeight:'500',
    },
    countryDetailsTitle:{
        fontSize: 16, paddingLeft: 20, color: brandColors.petrol, fontWeight:'500',
    },

    searchbar: {
        height: 50 , borderWidth: 2, borderColor: '#E5E5E5' , borderRadius: 10 , fontSize: 20
    },
    cardView: {
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 5,
        backgroundColor: '#E5E5E5' ,
        marginVertical: 5
    }
})

export default styles;
