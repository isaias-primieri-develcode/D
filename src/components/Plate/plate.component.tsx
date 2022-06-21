import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAuth} from '../../contexts/auth';
import theme from '../../global/theme';
import api from '../../service/api';
import {
  Container,
  Content,
  Description,
  DescriptionView,
  Footer,
  PlateAdd,
  PlatePhoto,
  Price,
  Title,
} from './plate.component.style';

interface Photo {
  id: number;
  code: string;
}

interface Props {
  name: string;
  description: string;
  price: string;
  source: any;
  //   photo: string;
}

export function Plate({name, description, price, source}: Props) {
  const {authState} = useAuth();
  const [photo, setPhoto] = useState<Photo>([]);

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
    const priceWZeros = parseFloat(price).toFixed(2);
    const priceFormatted = priceWZeros.toString().replace('.', ',');
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  useEffect(() => {
    FetchPhoto();
  }, []);

  return (
    <Container>
      <Content>
        <PlatePhoto
          source={
            photo.code ? {uri: `${photo.code}`} : theme.icons.DefaultRestaurant
          }
        />
        <DescriptionView>
          <View style={{width: RFValue(171)}}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          </View>
          <Footer>
            <Price>R$ {priceFormatted}</Price>
            <TouchableOpacity>
              <PlateAdd>Adicionar</PlateAdd>
            </TouchableOpacity>
          </Footer>
        </DescriptionView>
      </Content>
    </Container>
  );
}
