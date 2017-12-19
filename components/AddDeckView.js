// Currently not used, left for reference

import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'

const AddContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubContainer = styled.View`
  height: 50%;
  width: 90%;
  background-color: #333;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
const Title = styled.Text`
  font-size: 32px;
  color: white;
`
const SubTitle = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 10px;
`
const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
`
const SubmitButton = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  border: 1px solid yellow;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`
const ButtonText = styled.Text`
  font-size: 18px;
  color: white
`

const AddDeckView = function({ navigation }) {
  submitTitle = () => {
    navigation.navigate('AddCard')
  }
  return (
    <AddContainer>
      <SubContainer>
        <Title>Title</Title>
        <SubTitle>Max length 50 characters</SubTitle>
        <Input maxLength={50} />
        <SubmitButton onPress={() => submitTitle()}>
          <ButtonText>Add</ButtonText>
        </SubmitButton>
      </SubContainer>
    </AddContainer>
  )
}

export default AddDeckView
