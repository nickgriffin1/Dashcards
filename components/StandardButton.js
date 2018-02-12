import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
`;

function StandardButton({
  text,
  color,
  action,
  isDisabled,
}) {
  return (
    <Button
      style={{ borderColor: isDisabled ? 'grey' : color }}
      onPress={action}
      disabled={isDisabled}
    >
      <ButtonText style={{ color: isDisabled ? 'grey' : color }}>{text}</ButtonText>
    </Button>
  );
}

export default StandardButton;
