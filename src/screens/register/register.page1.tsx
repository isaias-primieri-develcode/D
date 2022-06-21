/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import * as yup from 'yup'
import {
  Image,
  Text, View,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import Register1png from '../../assets/resgister/register1.png'
import BackPng from '../../assets/imageIcons/back.png'


import {
  Container, Content,
} from './register.styles';
import { useRegister } from '../../contexts/Register';
import { Header } from '../../components/Headers/header.component';
import { Input } from '../../components/Input/input.component';
import { useTheme } from 'styled-components';

export function Register1() {
  const { body } = useRegister()
  const navigation = useNavigation()
  const theme = useTheme();

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
      <Header color="#fff" name="Cadastro" source={BackPng} onPress={() => handleBack()} Textcolor="#2B2B2E"/>
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
          <Content>

            <Input
              source={theme.icons.emailIcon}
              handleChangeProp={handleChange('email')}
              valueProp={values.email}
              onBlurProp={handleBlur('email')}
              placeholder="exemplo@email.com"
              keyboradTypeProp="email-address"
              />
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
                  <Input
              source={theme.icons.passwordIcon}
              handleChangeProp={handleChange('password')}
              valueProp={values.password}
              onBlurProp={handleBlur('password_email')}
              placeholder="senha"
              keyboradTypeProp="default"
              />
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
            <Input
              source={theme.icons.passwordIcon}
              handleChangeProp={handleChange('password_confirm')}
              valueProp={values.password_confirm}
              placeholder="confirmar Senha"
              keyboradTypeProp="default"
              />
              </Content>
            {values.password !== '' && values.email !== ''
              ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
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
