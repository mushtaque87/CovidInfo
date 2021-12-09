import {StyleSheet} from 'react-native';
import {brandColors} from '../../common/common-styles';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 5,
  },
  cardView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 220,
    paddingRight: 10,
  },
  globalDataTitle: {
    fontSize: 14,
    paddingRight: 20,
    color: brandColors.petrol,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dataTitle: {
    fontSize: 25,
    paddingRight: 20,
    color: brandColors.petrol,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  graphView: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  top5CountryTitle: {
    fontSize: 25,
    paddingRight: 20,
    color: brandColors.petrol,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  top5CountryConfirmationTitle: {
    fontSize: 20,
    paddingRight: 20,
    color: brandColors.petrol,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  top5CountryListView: {
    width: '20%',
    height: 150,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
  },
  top5View: {
    height: 180,
    // backgroundColor:'green',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default styles;
