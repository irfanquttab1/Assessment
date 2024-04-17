import React from 'react';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import {styles} from './Style';
import Theme from '../../Utils/Theme';

function Button({title, onPress, disabled, loader, modal, ...rest}) {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          {
            width: modal ? Theme.wp('50%') : Theme.wp('80%'),
            height: Theme.hp('7%'),
            borderRadius: 10,
            backgroundColor: disabled & !loader ? 'grey' : 'teal',
          },
        ]}
        {...rest}>
        {loader ? (
          <ActivityIndicator color={'white'} size={30} />
        ) : (
          <Text fontSize={24} fontWeight="600" style={styles.buttonText}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Button;
