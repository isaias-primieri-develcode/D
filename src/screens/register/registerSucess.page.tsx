/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonLogin} from '../../components/Button/button.component';
import RegisterSucesspng from '../../assets/resgister/registerSucess.png';
import Close from '../../assets/imageIcons/close.png';

import {
  Container,
  TextInfo,
  TextView,
  Title,
  WomanImage,
} from './register.styles';
import {Header} from '../../components/Headers/header.component';

export function RegisterSucess() {
  const navigation = useNavigation();
  function handleBack() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header
        name="Cadastro"
        color="white"
        source={Close}
        onPress={() => handleBack()}
        Textcolor="#2B2B2E"
      />
      {/* <View style={{justifyContent: 'center', flex: 1}}> */}
      <WomanImage source={RegisterSucesspng} />
      <TextView>
        <Title style={{color: '#2B2B2E', fontSize: 28, fontWeight: '500'}}>
          Cadastro finalizado!
        </Title>

        <TextInfo>
          Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
          economizar com super cupons Develfood.
        </TextInfo>
      </TextView>

      <View style={{width: 295, alignItems: 'flex-end'}} />

      <ButtonLogin
        title="Concluir"
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      {/* </View> */}
    </Container>
  );
}
