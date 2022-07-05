/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  Category,
  CheckIcon,
  Container,
  DescriptionView,
  ImageRestaurant,
  ImageView,
  Name,
  Observation,
  OrderInfo,
  OrderNumber,
  OrderStatus,
  Profile,
  Title,
} from "./historic.component.styles";

interface Photo {
  id: number;
  code: string;
}

interface Props {
  name: string;
  photo_url: string;
  observationName: string;
  number: number;
  orderStatus: string;
}

export function HistoricComponent({
  name,
  observationName,
  photo_url,
  number,
  orderStatus,
}: Props) {
  const [photo, setPhoto] = useState<Photo>([]);
  const { authState } = useAuth();

  function FetchPhoto() {
    try {
      api
        .get(photo_url, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response) => {
          setPhoto(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => await FetchPhoto())();
  }, []);

  useEffect(() => {
    FetchPhoto();
  }, []);
  return (
    <Container>
      <Profile>
        <ImageView>
          <ImageRestaurant
            source={
              photo.code
                ? { uri: `${photo.code}` }
                : theme.icons.DefaultRestaurant
            }
          />
        </ImageView>
        <DescriptionView>
          <Name>{name}</Name>
          <OrderInfo>
            <CheckIcon source={theme.icons.Check} />
            <OrderStatus>{orderStatus}</OrderStatus>
            <OrderNumber>N°{number}</OrderNumber>
          </OrderInfo>
          <Observation>{observationName}.</Observation>
        </DescriptionView>
      </Profile>
    </Container>
  );
}
