/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import React from "react";
import { Alert, Image, Text, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../../components/Button/button.component";
import {
  CepWrapper,
  Container,
  Content,
  InputSecondView,
  InputView,
  NicknameWrapper,
} from "./register.styles";

import Register3png from "../../assets/resgister/register3.png";

import { AuthProvider } from "../../contexts/auth";
import { useRegister } from "../../contexts/Register";
import api from "../../service/api";
import { Header } from "../../components/Headers/header.component";
import BackPng from "../../assets/imageIcons/back.png";
import { Input } from "../../components/Input/input.component";
import { useTheme } from "styled-components";
import { PhoneInput } from "../../components/Input/phoneInput.component";

export function Register3() {
  const { body } = useRegister();
  const theme = useTheme();

  const navigation = useNavigation();

  const loginValidationSchema = yup
    .object()
    .shape({
      nickname: yup.string().required("campo obrigatorio"),
      cep: yup.string().required("campo obrigatorio"),
      street: yup.string().required("campo obrigatorio"),
      district: yup.string().required("campo obrigatorio"),
      city: yup.string().required("campo obrigatorio"),
      state: yup.string().required("campo obrigatorio"),
      number: yup.string().required("campo obrigatorio"),
    })
    .required();
  function handleBack() {
    navigation.navigate("Register2");
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
            nickname: "",
            cep: "",
            street: "",
            district: "",
            city: "",
            state: "",
            number: "",
          }}
          onSubmit={async (values) => {
            body.costumer.address.nickname = values.nickname;
            body.costumer.address.zipCode = values.cep;
            body.costumer.address.street = values.street;
            body.costumer.address.city = values.city;
            body.costumer.address.state = values.state;
            body.costumer.address.number = values.number;
            body.costumer.address.neighborhood = values.district;
            try {
              await api.post("/user", body);
              navigation.navigate("RegisterSucess");
            } catch (erro) {
              console.log("erro:", erro);
              Alert.alert("erro no cadastro");
              navigation.navigate("Login");
            }

            console.log("body:", body);
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
                <View style={{ flexDirection: "row" }}>
                  <NicknameWrapper>
                    <Input
                      placeholder="Apelido do End."
                      handleChangeProp={handleChange("nickname")}
                      onBlurProp={handleBlur("nickname")}
                      valueProp={values.nickname}
                      keyboradTypeProp="email-address"
                      source={theme.icons.Location}
                    />
                    {errors.nickname && touched.nickname && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.nickname}
                      </Text>
                    )}
                  </NicknameWrapper>
                  <CepWrapper>
                    <PhoneInput
                      placeholder="CEP"
                      handleChangeProp={handleChange("cep")}
                      onBlurProp={handleBlur("cep")}
                      valueProp={values.cep}
                      keyboradTypeProp="numeric"
                      source={theme.icons.Location}
                    />
                    {errors.cep && touched.cep && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.cep}
                      </Text>
                    )}
                  </CepWrapper>
                </View>
                <Input
                  placeholder="Rua"
                  handleChangeProp={handleChange("street")}
                  onBlurProp={handleBlur("street")}
                  valueProp={values.street}
                  keyboradTypeProp="email-address"
                  source={theme.icons.Location}
                />
                {errors.street && touched.street && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.street}
                  </Text>
                )}
                <Input
                  placeholder="Cidade"
                  handleChangeProp={handleChange("city")}
                  onBlurProp={handleBlur("city")}
                  valueProp={values.city}
                  keyboradTypeProp="email-address"
                  source={theme.icons.Location}
                />
                {errors.city && touched.city && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.city}
                  </Text>
                )}
                <Input
                  placeholder="Bairro"
                  handleChangeProp={handleChange("district")}
                  onBlurProp={handleBlur("district")}
                  valueProp={values.district}
                  keyboradTypeProp="email-address"
                  source={theme.icons.Location}
                />
                {errors.district && touched.district && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.district}
                  </Text>
                )}

                <View style={{ flexDirection: "row" }}>
                  <InputView>
                    <Input
                      placeholder="Estado"
                      handleChangeProp={handleChange("state")}
                      onBlurProp={handleBlur("state")}
                      valueProp={values.state}
                      keyboradTypeProp="email-address"
                      source={theme.icons.Location}
                    />
                    {errors.state && touched.state && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.state}
                      </Text>
                    )}
                  </InputView>
                  <InputSecondView>
                    <PhoneInput
                      placeholder="Número"
                      handleChangeProp={handleChange("number")}
                      onBlurProp={handleBlur("number")}
                      valueProp={values.number}
                      keyboradTypeProp="numeric"
                      source={theme.icons.Location}
                    />
                    {errors.number && touched.number && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: "red",
                        }}
                      >
                        {errors.number}
                      </Text>
                    )}
                  </InputSecondView>
                </View>
              </Content>
              {values.number !== "" && values.cep !== "" ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  disabled={!isValid}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              ) : (
                <>
                  <ButtonLogin title="Continuar" activeOpacity={0.8} disabled />
                  <Text style={{ color: "red", marginTop: 16 }}>
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
