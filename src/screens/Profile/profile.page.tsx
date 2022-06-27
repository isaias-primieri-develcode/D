/* eslint-disable quotes */
import React, { useContext } from "react";
import { Image } from "react-native";
import { SettingItem } from "../../components/SettingItem/settingItem.component";
import AuthContext from "../../contexts/auth";
import theme from "../../global/theme";

import {
  Container,
  EditorImage,
  EditorText,
  EditorView,
  ImageView,
  ProfileHeader,
  Title,
  TitleView,
  UserImage,
} from "./profile.styles";

export function Profile() {
  // const { Username } =
  const { setSigned, logOut } = useContext(AuthContext);

  return (
    <Container>
      <ProfileHeader>
        <ImageView>
          <UserImage source={theme.icons.DefaultUser} />
        </ImageView>

        <TitleView>
          <Title>Seja bem vindo, {"Username"} </Title>
          <EditorView activeOpacity={0.7}>
            <EditorText>Editar perfil </EditorText>
            <EditorImage source={theme.icons.Editor} />
          </EditorView>
        </TitleView>
      </ProfileHeader>
      <SettingItem name="d" />
    </Container>
  );
}
