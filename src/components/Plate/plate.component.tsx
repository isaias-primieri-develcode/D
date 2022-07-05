/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { AppRegistry, TouchableOpacity, View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import App from "../../../App";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import "react-native-gesture-handler";
import { name as appName } from "../../../app.json";
import theme from "../../global/theme";
import api from "../../service/api";
import { ChangeCartQuantity } from "../ChangeCartQuantity/changeCartQuantity.component";
import {
  ChangeCartView,
  Container,
  Content,
  ContentContainer,
  DeleteImage,
  DeleteText,
  DeleteView,
  Description,
  DescriptionView,
  Footer,
  PlateAdd,
  PlatePhoto,
  Price,
  Title,
} from "./plate.component.style";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
interface Photo {
  id: number;
  code: string;
}

interface PlateProps {
  id: number;
  price: number;
}
interface CartItemProps {
  plate: PlateProps;
  quantity: number;
  observation: string;
  price: number;
  photo: string;
  name: string;
}

interface Props {
  name: string;
  description: string;
  price: number;
  source: string;
  id: number;
  restaurantId: number;
  food_types: string;
  restaurantName: string;
  photo_url: string;
  platePhoto: string;
  right: boolean;
  swipeDelete: boolean;
}

export function Plate({
  name,
  description,
  price,
  source,
  id,
  restaurantId,
  photo_url,
  restaurantName,
  food_types,
  right,
  platePhoto,
  swipeDelete,
}: Props) {
  const { authState } = useAuth();
  const {
    cartItems,
    handleAddCart,
    handleDeleteCart,
    handleRemoveCart,
    handleAddNewCart,
  } = useCart();
  const [photo, setPhoto] = useState<Photo>([]);

  const [effect, setEffect] = useState(false);

  const [swipeWidth, setSwipeWidth] = useState("90%");

  const findItem = cartItems.find((item: any) => item.plate.id === id);

  const RenderRight = () => {
    return (
      <DeleteView
        activeOpacity={1}
        onPress={() => {
          handleDeleteCart({
            id,
            price,
            findItem,
            description,
            restaurantId,
            plateName: name,
            name: restaurantName,
            photo_url: photo,
            food_types: food_types,
            photo: photo,
          });
          setEffect(!effect);
        }}
      >
        <DeleteImage source={theme.icons.Delete} />
        <DeleteText>Remover</DeleteText>
      </DeleteView>
    );
  };

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
  }, [source]);

  return (
    <>
      {swipeDelete ? (
        <Container style={{ width: swipeWidth }}>
          <GestureHandlerRootView>
            <Swipeable
              renderLeftActions={RenderRight}
              onSwipeableWillClose={() => {
                setSwipeWidth("90%");
              }}
              onSwipeableWillOpen={() => {
                setSwipeWidth("100%");
              }}
            >
              <ContentContainer>
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
                    <ChangeCartView right={right ? RFValue(-25) : RFValue(0)}>
                      {cartItems.find(
                        (item: CartItemProps) => item.plate.id === id
                      )?.quantity > 0 ? (
                        <ChangeCartQuantity
                          swipeable={swipeDelete}
                          quantity={
                            cartItems.find(
                              (item: CartItemProps) => item.plate.id === id
                            )?.quantity
                          }
                          deleteOnPress={() => {
                            handleDeleteCart({
                              id,
                              price,
                              findItem,
                              description,
                              restaurantId,
                              plateName: name,
                              name: restaurantName,
                              photo_url: photo_url,
                              food_types: food_types,
                              photo: platePhoto,
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
                              plateName: name,
                              name: restaurantName,
                              photo_url: photo_url,
                              food_types: food_types,
                              photo: platePhoto,
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
                              plateName: name,
                              name: restaurantName,
                              photo_url: photo_url,
                              food_types: food_types,
                              photo: platePhoto,
                            });
                            setEffect(!effect);
                          }}
                        />
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            handleAddNewCart({
                              id,
                              price,
                              findItem,
                              description,
                              restaurantId,
                              plateName: name,
                              name: restaurantName,
                              photo_url: photo_url,
                              food_types: food_types,
                              photo: platePhoto,
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
              </ContentContainer>
            </Swipeable>
          </GestureHandlerRootView>
        </Container>
      ) : (
        <Container>
          <ContentContainer>
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
                <ChangeCartView right={right ? RFValue(-25) : RFValue(0)}>
                  {cartItems.find((item: CartItemProps) => item.plate.id === id)
                    ?.quantity > 0 ? (
                    <ChangeCartQuantity
                      swipeable={swipeDelete}
                      quantity={
                        cartItems.find((item: CartItemProps) => item.plate.id === id)
                          ?.quantity
                      }
                      deleteOnPress={() => {
                        handleDeleteCart({
                          id,
                          price,
                          findItem,
                          description,
                          restaurantId,
                          plateName: name,
                          name: restaurantName,
                          photo_url: photo,
                          food_types: food_types,
                          photo: photo,
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
                          plateName: name,
                          name: restaurantName,
                          photo_url: photo_url,
                          food_types: food_types,
                          photo: photo,
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
                          plateName: name,
                          name: restaurantName,
                          photo_url: photo_url,
                          food_types: food_types,
                          photo: platePhoto,
                        });
                        setEffect(!effect);
                      }}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        handleAddNewCart({
                          id,
                          price,
                          findItem,
                          description,
                          restaurantId,
                          plateName: name,
                          name: restaurantName,
                          photo_url: photo_url,
                          food_types: food_types,
                          photo: platePhoto,
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
          </ContentContainer>
        </Container>
      )}
    </>
  );
}
