import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMain: {
    width: Theme.wp('90%'),
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 20,
    paddingVertical: 30,
    borderRadius: 10,
  },
  isVisible: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  hitSlope: {top: 20, left: 20, right: 20, bottom: 20},
  icon: {position: 'absolute', right: 10, top: 10},
});
