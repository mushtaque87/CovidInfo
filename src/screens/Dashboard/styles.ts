import {StyleSheet} from 'react-native';
import {borderRadius, brandColors} from '../../common/common-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  graphView: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 5,
    padding: 5,
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
  slideContainer: {
    height: 400,
    width: '100%',
    backgroundColor: 'red',
    paddingRight: 20,
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
});

export default styles;
