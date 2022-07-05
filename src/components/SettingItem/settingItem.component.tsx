/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  Container,
  Icon,
  Title,
  ViewIcon,
  ViewInfo,
} from "./settingItem.component.style";

interface Photo {
  id: number;
  code: string;
}

interface Props {
  name: string;
  source: string;
  onPress: () => void;
}

export function SettingItem({ name, onPress, source }: Props) {
  const { authState } = useAuth();

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <ViewIcon>
        <Icon source={source} />
      </ViewIcon>
      <ViewInfo>
        <Title>{name}</Title>
      </ViewInfo>
    </Container>
  );
}
