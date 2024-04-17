import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

export const styles = StyleSheet.create({
  main: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    backgroundColor: '#e8ecf4',
    alignSelf: 'center',
  },
  headerIcon: {
    backgroundColor: 'teal',
    width: Theme.wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    gap: 30,
    paddingVertical: 10,
  },

  hitSlope: {top: 20, left: 20, right: 20, bottom: 20},
  addTask: {
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
