/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { ScrollView, Image } from "react-native";
import theme from "../../global/theme";
import {
  Container,
  ImageBanner,
  IndicatorView,
} from "./carousel.component.styles";

export function BannerHomeImage() {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 12 }}
        scrollEventThrottle={3}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ImageBanner source={theme.icons.prato1} />
        <ImageBanner source={theme.icons.prato2} />
        <ImageBanner source={theme.icons.prato3} />
      </ScrollView>
      <IndicatorView>
        <Image source={require("../../assets/homeImages/Indicators.png")} />
      </IndicatorView>
    </Container>
  );
}
