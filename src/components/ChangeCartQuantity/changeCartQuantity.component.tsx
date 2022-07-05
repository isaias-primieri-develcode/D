/* eslint-disable quotes */
import React from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../global/theme";
import {
  AddImage,
  Container,
  DeleteImage,
  QuantityView,
  RemoveImage,
  Title,
  TouchableOpacityView,
} from "./changeCartQuantity.component.styles";

interface changeCartQuantityProps extends TouchableOpacityProps {
  quantity: number;
  swipeable?: boolean;
  deleteOnPress: () => void;
  addOnPress: () => void;
  removeOnPress: () => void;
}

export function ChangeCartQuantity({
  quantity,
  addOnPress,
  swipeable,
  deleteOnPress,
  removeOnPress,
}: changeCartQuantityProps) {
  return (
    <Container>
      {quantity === 1 ? (
        <TouchableOpacityView onPress={deleteOnPress}>
          {swipeable ? (
            <DeleteImage source={theme.icons.Remove} />
          ) : (
            <DeleteImage source={theme.icons.Delete} />
          )}
        </TouchableOpacityView>
      ) : (
        <TouchableOpacityView onPress={removeOnPress}>
          <RemoveImage source={theme.icons.Remove} />
        </TouchableOpacityView>
      )}
      <QuantityView>
        <Title>{quantity}</Title>
      </QuantityView>
      <TouchableOpacityView onPress={addOnPress}>
        <AddImage source={theme.icons.Add} />
      </TouchableOpacityView>
    </Container>
  );
}
