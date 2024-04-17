import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Title from '../Text/Title';
import Theme from '../../Utils/Theme';
import Feather from 'react-native-vector-icons/Feather';

const InputField = ({
  value,
  onChangeText,
  lable,
  placeholder,
  secureTextEntry,
  multiline,
  des,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };
  return (
    <View style={{width: '100%'}}>
      <Title
        lable={lable}
        fsize={17}
        fweight={'600'}
        col={'#222'}
        marginBottom={8}
      />
      <View style={styles.iconView}>
        <TextInput
          clearButtonMode="while-editing"
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#6b7280"
          secureTextEntry={!isPasswordVisible && secureTextEntry}
          style={[
            styles.inputControl,
            {
              height: des ? Theme.hp('12%') : Theme.hp('6%'),
              width: secureTextEntry ? '93%' : '100%',
            },
          ]}
          multiline={multiline}
          numberOfLines={8}
          value={value}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
  inputControl: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: '#C9D3DB',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
