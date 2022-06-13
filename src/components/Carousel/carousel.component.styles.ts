import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${RFValue(150)}px;
  margin-left: ${RFValue(5)}px;
`
export const ImageBanner = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(327)}px;
  margin: ${RFValue(6)}px;
  border-radius: 8px;
`
export const ViewCircles = styled.View`
  align-items: center;
`
export const ViewCirclesGroup = styled.View`
  flex-direction: row;
`
export const ImageCircle = styled.Image`
  margin: ${RFValue(6)}px;
`
