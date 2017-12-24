import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
const ButtonText = styled.Text`
  font-size: 16px;
`
function StandardButton({ text, color, action }) {
  return (
    <Button style={{ borderColor: color }} onPress={action}>
      <ButtonText style={{ color }}>{text}</ButtonText>
    </Button>
  )
}

export default StandardButton
