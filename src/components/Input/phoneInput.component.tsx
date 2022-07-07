/* eslint-disable quotes */
import React from "react";
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import { ValueInput, ViewInput, InputIcon } from "./input.component.styles";

interface Props extends TextInputProps {
  placeholder: string;
  source: ImageSourcePropType;
  onBlurProp?: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChangeProp?: (value: string) => void;
  valueProp?: string;
  keyboradTypeProp?: KeyboardTypeOptions; // string | KeyboardTypeOptions;
}

export function PhoneInput({
  placeholder,
  source,
  handleChangeProp,
  onBlurProp,
  keyboradTypeProp,
  valueProp,
}: Props) {
  return (
    <ViewInput>
      <InputIcon source={source} />
      <ValueInput
        placeholder={placeholder}
        type="cel-phone"
        options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
        onChangeText={handleChangeProp}
        value={valueProp}
        onBlur={onBlurProp}
        keyboardType={keyboradTypeProp}
      />
    </ViewInput>
  );
}
