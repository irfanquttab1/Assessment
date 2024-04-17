import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

export const styles = StyleSheet.create({
  renderTask: {
    width: Theme.wp('90%'),
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  renderItem: {width: Theme.wp('70%'), gap: 5},
  contentContain: {
    paddingBottom: Theme.hp('15%'),
    alignSelf: 'center',
  },
  emptyDataView: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    height: Theme.hp('40%'),
    width: Theme.hp('40%'),
  },
});
