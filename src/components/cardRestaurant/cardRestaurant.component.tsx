/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  Container,
  ImageFavorite,
  ImageRate,
  ImageRestaurant,
  RateContainer,
  TextCategories,
  TextInfo,
  TextRate,
  ViewFavorite,
  FavoriteIconButton,
  ViewInfo,
} from "./cardRestaurant.styles";

interface Photo {
  id: number;
  code: string;
}

interface Props {
  id: number;
  name: string;
  category: string;
  rate: number;
  source: string;
  onPress: () => void;
}

export function CardRestaurant({
  name,
  category,
  rate,
  onPress,
  source,
}: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const [data, setData] = useState<Photo>([]);
  const { authState } = useAuth();
  function FetchData() {
    try {
      api
        .get(source, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <ImageRestaurant
        source={
          data.code ? { uri: `${data.code}` } : theme.icons.DefaultRestaurant
        }
      />
      <ViewFavorite>
        <FavoriteIconButton onPress={() => setIsPressed(!isPressed)}>
          <ImageFavorite
            source={require("../../assets/icons/favoriteRestaurant.png")}
            style={isPressed ? { tintColor: "#c20c18" } : null}
          />
        </FavoriteIconButton>
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>{category}</TextCategories>
        <RateContainer>
          <ImageRate source={require("../../assets/imageIcons/rateStar.png")} />
          <TextRate>{rate}</TextRate>
        </RateContainer>
      </ViewInfo>
    </Container>
  );
}
