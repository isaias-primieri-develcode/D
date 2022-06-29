/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../../components/Button/button.component";
import MiniLogo from "../../assets/images/miniLogo.png";
import PizzaPng from "../../assets/images/pizza.png";
import XburguerPng from "../../assets/images/xburguer.png";
import KetchupPng from "../../assets/images/ketchup.png";
import HiddenPassword from "../../assets/imageIcons/hiddenPassword.png";
import PasswordDown from "../../assets/imageIcons/password.png";

import {
  Container,
  Ketchup,
  Pizza,
  Logo,
  Xburguer,
  Content,
} from "./login.styles";
import api from "../../service/api";
import { useAuth } from "../../contexts/auth";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input/input.component";

export interface IUsuario {
  email: string;
  password: string;
  id: number;
}

export function Login() {
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
  const { setSigned, signed, setAuthState, setUser, setCostumerId } = useAuth();

  const theme = useTheme();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Por favor adicione um e-mail")
      .required("Endereço de e-mail obrigatório"),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .required("Senha obrigatória"),
  });
  const login = async (data: IUsuario) => {
    try {
      const response = await api.post("/auth", data);
      const user = {
        token: response.data.token,
        email: data.email,
        password: data.password,
      };
      if (response.status === 200) {
        setAuthState(response.data);
        setUser(user);
        setSigned(true);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      Alert.alert("Usuário não encontrado!");
    }
  };

  return (
    <Container>
      <Pizza source={PizzaPng} />
      <Xburguer source={XburguerPng} />
      <Ketchup source={KetchupPng} />
      <Logo source={MiniLogo} />

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          login({
            email: values.email,
            password: values.password,
            id: 1,
          });
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
                handleChangeProp={handleChange("email")}
                valueProp={values.email}
                onBlurProp={handleBlur("email")}
                placeholder="exemplo@email.com"
                keyboradTypeProp="email-address"
              />
              {errors.email && touched.email && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                  }}
                >
                  {errors.email}
                </Text>
              )}

              <Input
                handleChangeProp={handleChange("password")}
                keyboradTypeProp={"default"}
                placeholder="****************"
                onBlurProp={handleBlur("password")}
                source={theme.icons.passwordIcon}
                valueProp={values.password}
              />
              {errors.password && touched.password && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                  }}
                >
                  {errors.password}
                </Text>
              )}
            </Content>
            <View style={{ width: 295, alignItems: "flex-end" }}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{
                    paddingTop: 12,
                    fontWeight: "bold",
                    color: "#68484A",
                  }}
                >
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>
            {values.password !== "" && values.email !== "" ? (
              <ButtonLogin
                title="Continuar"
                activeOpacity={0.8}
                disabled={!isValid}
                onPress={() => {
                  handleSubmit();
                }}
              />
            ) : (
              <ButtonLogin
                title="Continuar"
                activeOpacity={0.8}
                disabled
                onPress={() => {
                  handleSubmit();
                }}
              />
            )}
          </>
        )}
      </Formik>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("Register1")}
      >
        <Text
          style={{
            marginTop: 16,
            fontWeight: "bold",
            color: "#68484A",
          }}
        >
          Não possui cadastro?{" "}
        </Text>
        <Text
          style={{
            marginTop: 16,
            fontWeight: "bold",
            color: "#cf2323",
          }}
        >
          Cadastre-se aqui!
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
