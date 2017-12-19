import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styled from 'styled-components/native'

const AddCardContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
`
const SubContainer = styled.View`
  height: 80%;
  width: 90%;
  background-color: #333;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
`
const Input = styled.TextInput`
  width: 80%;
  height: 30px;
  background-color: white;
  border-radius: 5px;
`
const Hr = styled.View`
  width: 80%;
  height: 1px;
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
`
const AddCardView = function() {
  return (
    <AddCardContainer>
      <SubContainer>
        <Title>New Card</Title>
        <Hr />
        <Title>Front</Title>
        <Input maxLength={100} />
        <Hr />
        <Title>Back</Title>
        <Input maxLength={1000} />
      </SubContainer>
    </AddCardContainer>
  )
}

export default AddCardView
