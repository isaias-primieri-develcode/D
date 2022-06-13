/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import React from 'react';
import {Image, Text} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {ButtonLogin} from '../../components/Button/button.component';
import Phone from '../../assets/imageIcons/phone.png';
import CPF from '../../assets/imageIcons/cpf.png';
import Name from '../../assets/imageIcons/name.png';
import BackPng from '../../assets/imageIcons/back.png';

import Register2png from '../../assets/resgister/register2.png';

import {Container, ValueInput, ViewInput} from './register.styles';
import {cpf, phoneNumber} from '../../utils/validations';
import {AuthProvider} from '../../contexts/auth';
import {useRegister} from '../../contexts/Register';
import {Header} from '../../components/Headers/header.component';

export function Register2() {
  const navigation = useNavigation();
  const loginValidationSchema = Yup.object()
    .shape({
      name: Yup.string().required(),
      cpf: Yup.string().required().matches(cpf, 'ex: 123.456.789-00'),
      phone: Yup.string().matches(phoneNumber, 'ex: (DDD) 98765-4321'),
    })
    .required();
  const {body} = useRegister();
  function handleBack() {
    navigation.navigate('Register1');
  }

  return (
    <AuthProvider>
      <Container>
        <Header
          color="white"
          name="Cadastro"
          source={BackPng}
          onPress={() => handleBack()}
          Textcolor="#2B2B2E"
        />
        <Image source={Register2png} />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{name: '', cpf: '', phone: ''}}
          onSubmit={values => {
            body.costumer.firstName = values.name;
            body.costumer.cpf = values.cpf;
            body.costumer.phone = values.phone;
          }}>
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
                <Image
                  source={Name}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  keyboardType="default"
                />
              </ViewInput>
              {errors.name && touched.name && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.name}
                </Text>
              )}
              <ViewInput>
                <Image
                  source={Name}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput placeholder="Sobrenome" keyboardType="default" />
              </ViewInput>
              <ViewInput>
                <Image
                  source={CPF}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="CPF"
                  onChangeText={handleChange('cpf')}
                  onBlur={handleBlur('cpf')}
                  value={values.cpf}
                  keyboardType="number-pad"
                />
              </ViewInput>
              {errors.cpf && touched.cpf && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.cpf}
                </Text>
              )}
              <ViewInput>
                <Image
                  source={Phone}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="Telefone"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  keyboardType="phone-pad"
                />
              </ViewInput>
              {errors.phone && touched.phone && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.phone}
                </Text>
              )}

              {values.name !== '' && values.phone !== '' ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  style={isValid ? {opacity: 1} : {opacity: 0.6}}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('Register3');
                    handleSubmit();
                  }}
                />
              ) : (
                <>
                  <ButtonLogin
                    style={{opacity: 0.6}}
                    title="Continuar"
                    activeOpacity={0.8}
                    disabled
                  />
                  <Text style={{color: 'red', marginTop: 16}}>
                    Preencha todos os campos
                  </Text>
                </>
              )}
            </>
          )}
        </Formik>
      </Container>
    </AuthProvider>
  );
}
