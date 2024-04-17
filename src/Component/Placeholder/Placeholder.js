import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Theme from '../../Utils/Theme';
import {styles} from './Style';

const Placeholder = ({number}) => {
  const numberOfPlaceholders = number;
  const placeholders = Array.from(
    {length: numberOfPlaceholders},
    (_, index) => index,
  );

  return (
    <View style={styles.main}>
      {placeholders.map((_, index) => (
        <View key={index} style={{marginTop: 15}}>
          <SkeletonPlaceholder borderRadius={10}>
            <SkeletonPlaceholder.Item
              width={Theme.wp('90%')}
              height={Theme.hp('10%')}
              backgroundColor={'#E1E1E1'}
            />
          </SkeletonPlaceholder>
        </View>
      ))}
    </View>
  );
};

export default Placeholder;
