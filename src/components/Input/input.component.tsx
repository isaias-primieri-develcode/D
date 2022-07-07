/* eslint-disable quotes */
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { useTheme } from "styled-components";
import {
  ValueInput,
  ViewInput,
  InputIcon,
  HiddenPassword,
} from "./input.component.styles";

interface Props {
  placeholder: string;
  source: ImageSourcePropType;
  onBlurProp?: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChangeProp?: (value: string) => void;
  valueProp?: string;
  keyboradTypeProp?: KeyboardTypeOptions;
}

export function Input({
  placeholder,
  source,
  handleChangeProp,
  onBlurProp,
  keyboradTypeProp,
  valueProp,
}: Props) {
  const theme = useTheme();
  const [check, setCheck] = useState(false);
  return (
    <ViewInput>
      <InputIcon source={source} />
      <ValueInput
        placeholder={placeholder}
        onChangeText={handleChangeProp}
        value={valueProp}
        onBlur={onBlurProp}
        keyboardType={keyboradTypeProp}
        secureTextEntry={!check}
      />
      {source === theme.icons.passwordIcon ? (
        <HiddenPassword onPress={() => setCheck(!check)}>
          <Image source={theme.icons.hiddenPassword} />
        </HiddenPassword>
      ) : null}
    </ViewInput>
  );
}
