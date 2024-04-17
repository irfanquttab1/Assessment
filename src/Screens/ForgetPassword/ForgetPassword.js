import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from '../../Services/Auth';
import Title from '../../Component/Text/Title';
import InputField from '../../Component/InputField/InputField';
import Button from '../../Component/Button/Button';
import {styles} from '../../Component/GlobalStyle/GlobalStyle';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.main}>
      <View>
        <Title
          fsize={31}
          fweight={'700'}
          lable={'Forget Password?'}
          col={'#1D2A32'}
        />
        <Title
          fsize={15}
          fweight={'500'}
          lable={
            'Enter your registered email address below to reset password reset instructions'
          }
          col={'#929292'}
        />
      </View>
      <InputField
        lable="Email Address"
        placeholder="john@example.com"
        value={email}
        onChangeText={v => setEmail(v)}
      />

      <Button
        loader={isLoading}
        disabled={email == '' || isLoading}
        title={'Reset Password'}
        onPress={async () => {
          setIsLoading(true);
          await Auth.ForgotPassword(email, navigation);
          setIsLoading(false);
        }}
      />
      <View style={styles.alreadyAcount}>
        <Title
          fsize={15}
          fweight={'600'}
          lable={'Remember Password?'}
          col={'#222'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Title
            fsize={15}
            fweight={'600'}
            lable={'Sign in'}
            col={'teal'}
            textDecorationLine="underline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
