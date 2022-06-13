/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useState } from 'react';
import * as yup from 'yup'
import {
  Button,
  Image,
  Text, TouchableOpacity, View,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.png'
import Email from '../../assets/imageIcons/email.png'
import PasswordDown from '../../assets/imageIcons/password.png'
import Register1png from '../../assets/resgister/register1.png'
import BackPng from '../../assets/imageIcons/back.png'


import {
  Container, ValueInput, ViewInput, Password,
} from './register.styles';
import { useRegister } from '../../contexts/Register';
import { Header } from '../../components/Headers/header.component';

export function Register1() {
  const [check, setCheck] = useState(Boolean)
  const { body } = useRegister()
  const navigation = useNavigation()

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Por favor adicione um e-mail')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .oneOf([yup.ref('password_confirm'), null], 'as senhas devem ser iguais')
      .required('Senha obrigatória'),
    password_confirm: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .required('Password confirm is required'),

  })

  function handleBack(){
    navigation.navigate('Login')
  }

  return (
    <Container style={{
      flex: 1,
      height: '100%',
      justifyContent: 'flex-start',
    }}

    >
      <Header color='#fff' name='Cadastro' source={BackPng} onPress={() => handleBack()} Textcolor='#2B2B2E'/>
      <View style={{ height: 30 }} />
      <Image source={Register1png} />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: '',
          password: '',
          password_confirm: '',
        }}
        onSubmit={(values) => {
          body.email = values.email
          body.password = values.password
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <ViewInput>
              <Image source={Email} style={{
                position: 'absolute',
                left: 0,
                marginHorizontal: 10,
              }}
              />
              <ValueInput
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </ViewInput>
            {(errors.email && touched.email)
                  && (
                  <Text style={{
                    fontSize: 10,
                    color: 'red',
                  }}
                  >
                    {errors.email}
                  </Text>
                  )}
             <ViewInput>
                <Password style={{alignItems: 'center'}}>
                  <Image source={PasswordDown} />
                </Password>
                {check ? (
                  <View style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    right: 0,
                    height: 50,
                   }}>
                  <TouchableOpacity
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
                  </View>
                ) : (
                  <View style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    right: 0,
                    height: 50,
                   }}>
                  <TouchableOpacity
                    style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center',}}
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
                  </View>
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
            {(errors.password && touched.password)
                  && (
                  <Text style={{
                    fontSize: 10,
                    color: 'red',
                  }}
                  >
                    {errors.password}
                  </Text>
                  )}
            <ViewInput>
              <Password style={{ alignItems: 'center' }}>
                <Image source={PasswordDown} />
              </Password>
              <ValueInput
                onChangeText={handleChange('password_confirm')}
                onBlur={handleBlur('password_confirm')}
                value={values.password_confirm}
                secureTextEntry={!check}
                placeholder="Confirmar Senha"
              />
            </ViewInput>
            {values.password !== '' && values.email !== ''
              ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  style={isValid ? { opacity: 1 } : { opacity: 0.6 }}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('Register2')
                    handleSubmit()
                  }}
                />
              )
              : (
                <>
                  <ButtonLogin
                    style={{ opacity: 0.6 }}
                    title="Continuar"
                    activeOpacity={0.8}
                    disabled
                  />
                  <Text style={{ color: 'red', marginTop: 16 }}>
                    Preencha todos os campos

                  </Text>
                </>
              )}
          </>
        )}
      </Formik>
    </Container>
  )
}
