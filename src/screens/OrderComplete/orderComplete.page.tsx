/* eslint-disable quotes */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { ButtonLogin } from "../../components/Button/button.component";
import { Header } from "../../components/Headers/header.component";
import theme from "../../global/theme";
import {
  Container,
  OrderCompleteImage,
  Title,
  Content,
  Description,
  DescriptionView,
} from "./orderComplete.page.style";

export function OrderComplete() {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <Header
        color={theme.colors.background_red}
        Textcolor={theme.colors.text_white}
        name="Checkout"
        iconColor="white"
        source={theme.icons.Close}
        onPress={() => navigation.navigate("Home")}
      />
      <Content>
        <Title>Pedido Finalizado</Title>
        <OrderCompleteImage source={theme.icons.OrderComplete} />
        <DescriptionView>
          <Description>
            Agradecemos a preferência! Em breve você receberá atualizações sobre
            o status do seu pedido!
          </Description>
        </DescriptionView>
        <ButtonLogin
          title="Ver o pedido"
          onPress={() => navigation.navigate("Historic")}
        />
      </Content>
    </Container>
  );
}
