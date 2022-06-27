/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import api from "../../service/api";
import { ChangeCartQuantity } from "../ChangeCartQuantity/changeCartQuantity.component";
import {
  ChangeCartView,
  Container,
  Content,
  Description,
  DescriptionView,
  Footer,
  PlateAdd,
  PlatePhoto,
  Price,
  Title,
} from "./plate.component.style";

interface Photo {
  id: number;
  code: string;
}

interface Props {
  name: string;
  description: string;
  price: number;
  source: any;
  id: number;
  restaurantId: number;
}

export function Plate({
  name,
  description,
  price,
  source,
  id,
  restaurantId,
}: Props) {
  const { authState } = useAuth();
  const { cartItems, handleAddCart, handleDeleteCart, handleRemoveCart } =
    useCart();
  const [photo, setPhoto] = useState<Photo>([]);

  const [effect, setEffect] = useState(false);

  const findItem = cartItems.find((item: any) => item.plate.id === id);

  function FetchPhoto() {
    try {
      api
        .get(source, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response: any) => {
          setPhoto(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function priceConverter() {
    const priceWZeros = parseFloat(price.toString()).toFixed(2);
    const priceFormatted = priceWZeros.toString().replace(".", ",");
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  useEffect(() => {
    FetchPhoto();
  }, []);

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <Container>
      <Content>
        <PlatePhoto
          source={
            photo.code
              ? { uri: `${photo.code}` }
              : theme.icons.DefaultRestaurant
          }
        />
        <DescriptionView>
          <View style={{ width: RFValue(171) }}>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </View>
          <Footer>
            <Price>R$ {priceFormatted}</Price>
          </Footer>
          <ChangeCartView>
            {cartItems.find((item: any) => item.plate.id === id)?.quantity >
            0 ? (
              <ChangeCartQuantity
                quantity={
                  cartItems.find((item: any) => item.plate.id === id)?.quantity
                }
                deleteOnPress={() => {
                  handleDeleteCart({
                    id,
                    price,
                    findItem,
                    description,
                    restaurantId,
                  });
                  setEffect(!effect);
                }}
                addOnPress={() => {
                  handleAddCart({
                    id,
                    price,
                    findItem,
                    description,
                    restaurantId,
                  });
                  setEffect(!effect);
                }}
                removeOnPress={() => {
                  handleRemoveCart({
                    id,
                    price,
                    findItem,
                    description,
                    restaurantId,
                  });
                  setEffect(!effect);
                }}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleAddCart({
                    id,
                    price,
                    findItem,
                    description,
                    restaurantId,
                  });
                  setEffect(!effect);
                }}
              >
                <PlateAdd>Adicionar</PlateAdd>
              </TouchableOpacity>
            )}
          </ChangeCartView>
        </DescriptionView>
      </Content>
    </Container>
  );
}
