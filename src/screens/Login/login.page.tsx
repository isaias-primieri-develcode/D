/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonLogin} from '../../components/Button/button.component';
import MiniLogo from '../../assets/images/miniLogo.png';
import PizzaPng from '../../assets/images/pizza.png';
import XburguerPng from '../../assets/images/xburguer.png';
import KetchupPng from '../../assets/images/ketchup.png';
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.png';
import Email from '../../assets/imageIcons/email.png';
import PasswordDown from '../../assets/imageIcons/password.png';

import {
  Container,
  ValueInput,
  Ketchup,
  Pizza,
  Xburguer,
  ViewInput,
  Password,
} from './login.styles';
import api from '../../service/api';
import {useAuth} from '../../contexts/auth';

export interface IUsuario {
  email: string;
  password: string;
  id: number;
}

export function Login() {
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
  const {setSigned, signed, setAuthState, setUser} = useAuth();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Por favor adicione um e-mail')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(6, ({min}) => `A senha deve ter no minimo ${min} caracteres`)
      .required('Senha obrigatória'),
  });
  const login = async (data: IUsuario) => {
    try {
      const response = await api.post('/auth', data);
      const user = {
        token: response.data.token,
        email: data.email,
        password: data.password,
      };
      if (response.status === 200) {
        console.log('sim');
        console.log(signed);
        setAuthState(response.data);
        console.log(response.data);
        setUser(user);
        setSigned(true);
      } else {
        console.log('nao');
        console.log(response.status);
      }
    } catch (error) {
      Alert.alert('Usuário não encontrado!');
    }
  };

  return (
    <Container>
      <Pizza source={PizzaPng} />
      <Xburguer source={XburguerPng} />
      <Ketchup source={KetchupPng} />
      <Image source={MiniLogo} />

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
          login({
            email: values.email,
            password: values.password,
            id: 1,
          });
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => {
          return (
            <>
              <ViewInput>
                <Image
                  source={Email}
                  style={{position: 'absolute', left: 0, marginHorizontal: 10}}
                />
                <ValueInput
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              </ViewInput>
              {errors.email && touched.email && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.email}
                </Text>
              )}

              <ViewInput>
                <Password style={{alignItems: 'center'}}>
                  <Image source={PasswordDown} />
                </Password>
                {check ? (
                  <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                    onPress={() => {
                      setCheck(!check);
                    }}>
                    <Image
                      source={HiddenPassword}
                      style={{
                        marginHorizontal: 10,
                        backgroundColor: '#55a2',
                        borderRadius: 8,
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                    onPress={() => {
                      setCheck(!check);
                    }}>
                    <Image
                      source={HiddenPassword}
                      style={{
                        marginHorizontal: 10,
                      }}
                    />
                  </TouchableOpacity>
                )}
                <ValueInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  defaultValue="123456"
                  value={values.password}
                  secureTextEntry={!check}
                />
              </ViewInput>
              <View style={{width: 295, alignItems: 'flex-end'}}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text
                    style={{
                      paddingTop: 12,
                      fontWeight: 'bold',
                      color: '#68484A',
                    }}>
                    Esqueci minha senha
                  </Text>
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.password}
                </Text>
              )}
              {values.password !== '' && values.email !== '' ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  style={isValid ? {opacity: 1} : {opacity: 0.6}}
                  disabled={!isValid}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              ) : (
                <ButtonLogin
                  style={{opacity: 0.6}}
                  title="Continuar"
                  activeOpacity={0.8}
                  disabled
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              )}
            </>
          );
        }}
      </Formik>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flexDirection: 'row'}}
        onPress={() => navigation.navigate('Register1')}>
        <Text
          style={{
            marginTop: 16,
            fontWeight: 'bold',
            color: '#68484A',
          }}>
          Não possui cadastro?{' '}
        </Text>
        <Text
          style={{
            marginTop: 16,
            fontWeight: 'bold',
            color: '#cf2323',
          }}>
          Cadastre-se aqui!
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
