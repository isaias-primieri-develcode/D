/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Image, Text } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../../components/Button/button.component";
import BackPng from "../../assets/imageIcons/back.png";

import Register2png from "../../assets/resgister/register2.png";

import { Container, Content } from "./register.styles";
import { cpf, phoneNumber } from "../../utils/validations";
import { AuthProvider } from "../../contexts/auth";
import { useRegister } from "../../contexts/Register";
import { Header } from "../../components/Headers/header.component";
import { Input } from "../../components/Input/input.component";
import { useTheme } from "styled-components";
import { PhoneInput } from "../../components/Input/phoneInput.component";

export function Register2() {
  const navigation = useNavigation();
  const theme = useTheme();
  const loginValidationSchema = Yup.object()
    .shape({
      name: Yup.string().required(),
      cpf: Yup.string().required().matches(cpf, "CPF inválido").length(11),
      phone: Yup.string()
        .required()
        .matches(phoneNumber, "Telefone inválido")
        .length(11),
    })
    .required();
  const { body } = useRegister();
  function handleBack() {
    navigation.navigate("Register1");
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
          initialValues={{ name: "", cpf: "", phone: "" }}
          onSubmit={(values) => {
            body.costumer.firstName = values.name;
            body.costumer.cpf = values.cpf;
            body.costumer.phone = values.phone;
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
                  placeholder="Nome"
                  handleChangeProp={handleChange("name")}
                  onBlurProp={handleBlur("name")}
                  valueProp={values.name}
                  keyboradTypeProp="email-address"
                  source={theme.icons.nameIcon}
                />
                {errors.name && touched.name && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.name}
                  </Text>
                )}
                <Input
                  placeholder="Sobrenome"
                  keyboradTypeProp="email-address"
                  source={theme.icons.nameIcon}
                />
                <PhoneInput
                  placeholder="CPF"
                  handleChangeProp={handleChange("cpf")}
                  onBlurProp={handleBlur("cpf")}
                  valueProp={values.cpf}
                  keyboradTypeProp="numeric"
                  source={theme.icons.cpfIcon}
                />
                {errors.cpf && touched.cpf && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.cpf}
                  </Text>
                )}
                <PhoneInput
                  placeholder="Telefone"
                  handleChangeProp={handleChange("phone")}
                  onBlurProp={handleBlur("phone")}
                  valueProp={values.phone}
                  keyboradTypeProp="numeric"
                  source={theme.icons.phoneIcon}
                />
                {errors.phone && touched.phone && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                    }}
                  >
                    {errors.phone}
                  </Text>
                )}
              </Content>

              {values.name !== "" && values.phone !== "" ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate("Register3");
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
