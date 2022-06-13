/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import React from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {ButtonLogin} from '../../components/Button/button.component';
import {
  Container,
  ValueInput,
  ValueMiniInput,
  ViewInput,
  ViewMiniInput,
} from './register.styles';

import Location from '../../assets/imageIcons/location.png';
import Register3png from '../../assets/resgister/register3.png';

import {AuthProvider} from '../../contexts/auth';
import {useRegister} from '../../contexts/Register';
import api from '../../service/api';
import {Header} from '../../components/Headers/header.component';
import BackPng from '../../assets/imageIcons/back.png';

export function Register3() {
  const {body} = useRegister();
  const navigation = useNavigation();

  const loginValidationSchema = yup
    .object()
    .shape({
      nickname: yup.string().required('campo obrigatorio'),
      cep: yup.string().required('campo obrigatorio'),
      street: yup.string().required('campo obrigatorio'),
      district: yup.string().required('campo obrigatorio'),
      city: yup.string().required('campo obrigatorio'),
      state: yup.string().required('campo obrigatorio'),
      number: yup.string().required('campo obrigatorio'),
    })
    .required();
  function handleBack() {
    navigation.navigate('Register2');
  }
  return (
    <AuthProvider>
      <Container>
        <Header
          name="Cadastro"
          color="white"
          source={BackPng}
          onPress={() => handleBack()}
          Textcolor="#2B2B2E"
        />
        <Image source={Register3png} />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            nickname: '',
            cep: '',
            street: '',
            district: '',
            city: '',
            state: '',
            number: '',
          }}
          onSubmit={async values => {
            body.costumer.address.nickname = values.nickname;
            body.costumer.address.zipCode = values.cep;
            body.costumer.address.street = values.street;
            body.costumer.address.city = values.city;
            body.costumer.address.state = values.state;
            body.costumer.address.number = values.number;
            body.costumer.address.neighborhood = values.district;
            try {
              await api.post('/user', body);
              navigation.navigate('RegisterSucess');
            } catch (erro) {
              console.log('erro:', erro);
              Alert.alert('erro no cadastro');
              navigation.navigate('Login');
            }

            console.log('body:', body);
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
              <View style={{flexDirection: 'row'}}>
                <ViewMiniInput>
                  <Image
                    source={Location}
                    style={{
                      position: 'absolute',
                      left: 0,
                      marginHorizontal: 10,
                    }}
                  />
                  <ValueMiniInput
                    placeholder="Apelido"
                    onChangeText={handleChange('nickname')}
                    onBlur={handleBlur('nickname')}
                    value={values.nickname}
                    keyboardType="default"
                  />
                </ViewMiniInput>
                {errors.nickname && touched.nickname && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.nickname}
                  </Text>
                )}

                <ViewMiniInput>
                  <Image
                    source={Location}
                    style={{
                      position: 'absolute',
                      left: 0,
                      marginHorizontal: 10,
                    }}
                  />
                  <ValueMiniInput
                    placeholder="CEP"
                    onChangeText={handleChange('cep')}
                    onBlur={handleBlur('cep')}
                    value={values.cep}
                    keyboardType="default"
                  />
                </ViewMiniInput>
                {errors.cep && touched.cep && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.cep}
                  </Text>
                )}
              </View>
              <ViewInput>
                <Image
                  source={Location}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="Rua"
                  onChangeText={handleChange('street')}
                  onBlur={handleBlur('street')}
                  value={values.street}
                  keyboardType="default"
                />
              </ViewInput>
              {errors.street && touched.street && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.street}
                </Text>
              )}
              <ViewInput>
                <Image
                  source={Location}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="Cidade"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                  keyboardType="default"
                />
              </ViewInput>
              {errors.city && touched.city && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.city}
                </Text>
              )}
              <ViewInput>
                <Image
                  source={Location}
                  style={{
                    position: 'absolute',
                    left: 0,
                    marginHorizontal: 10,
                  }}
                />
                <ValueInput
                  placeholder="Bairro"
                  onChangeText={handleChange('district')}
                  onBlur={handleBlur('district')}
                  value={values.district}
                  keyboardType="default"
                />
              </ViewInput>
              {errors.district && touched.district && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                  }}>
                  {errors.district}
                </Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <ViewMiniInput>
                  <Image
                    source={Location}
                    style={{
                      position: 'absolute',
                      left: 0,
                      marginHorizontal: 10,
                    }}
                  />
                  <ValueMiniInput
                    placeholder="Estado"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                    keyboardType="default"
                  />
                </ViewMiniInput>
                {errors.state && touched.state && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.state}
                  </Text>
                )}
                <ViewMiniInput>
                  <Image
                    source={Location}
                    style={{
                      position: 'absolute',
                      left: 0,
                      marginHorizontal: 10,
                    }}
                  />
                  <ValueMiniInput
                    placeholder="Número"
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    value={values.number}
                    keyboardType="default"
                  />
                </ViewMiniInput>
                {errors.number && touched.number && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.number}
                  </Text>
                )}
              </View>
              {values.number !== '' && values.cep !== '' ? (
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
