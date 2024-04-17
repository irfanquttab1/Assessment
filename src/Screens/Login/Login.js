import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from '../../Services/Auth';
import Title from '../../Component/Text/Title';
import InputField from '../../Component/InputField/InputField';
import {styles} from '../../Component/GlobalStyle/GlobalStyle';
import Button from '../../Component/Button/Button';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Title
          fsize={31}
          fweight={'700'}
          lable={'Welcome back!'}
          col={'#1D2A32'}
        />
        <Title
          fsize={15}
          fweight={'500'}
          lable={'Sign in to your account'}
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
        title={'Sign in'}
        onPress={async () => {
          setIsLoading(true);
          await Auth.LogIn(form.email, form.password, navigation, dispatch);
          setIsLoading(false);
        }}
      />
      <View style={styles.alreadyAcount}>
        <Title
          fsize={15}
          fweight={'600'}
          lable={'Donot have an account?'}
          col={'#222'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Title
            fsize={15}
            fweight={'600'}
            lable={'Sign up'}
            col={'teal'}
            textDecorationLine="underline"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Title
          fsize={15}
          fweight={'600'}
          lable={'Forget Password?'}
          col={'teal'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
