import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from '../../Services/Auth';
import Title from '../../Component/Text/Title';
import InputField from '../../Component/InputField/InputField';
import {styles} from '../../Component/GlobalStyle/GlobalStyle';
import Button from '../../Component/Button/Button';

const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.main}>
      <View>
        <Title
          fsize={31}
          fweight={'700'}
          lable={"Let's Get Started!"}
          col={'#1D2A32'}
        />
        <Title
          fsize={15}
          fweight={'500'}
          lable={
            'Fill in the fields below to get started with your new account.'
          }
          col={'#929292'}
        />
      </View>
      <InputField
        lable="Email Address"
        placeholder="john@example.com"
        value={form?.email}
        onChangeText={v => setForm({...form, email: v})}
      />
      <InputField
        lable="Password"
        placeholder="*******"
        value={form?.password}
        secureTextEntry
        onChangeText={v => setForm({...form, password: v})}
      />
      <Button
        loader={isLoading}
        disabled={form?.email == '' || form?.password == '' || isLoading}
        title={'SignUp'}
        onPress={async () => {
          setIsLoading(true);
          await Auth.SignUp(form.email, form.password, navigation);
          setIsLoading(false);
        }}
      />
      <View style={styles.alreadyAcount}>
        <Title
          fsize={15}
          fweight={'600'}
          lable={'Already have an account?'}
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

export default SignUp;
