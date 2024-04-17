import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    paddingHorizontal: 20,
    gap: 20,
    paddingTop: Theme.hp('10%'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  alreadyAcount: {
    flexDirection: 'row',
    gap: 10,
  },
  header: {alignItems: 'center'},
});
