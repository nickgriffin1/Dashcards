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
const AddCardView = function({ navigation }) {
  const { title } = navigation.state.params
  return (
    <AddCardContainer>
      <SubContainer>
        <Title>{ title }</Title>
        <Title>Question</Title>
        <Input maxLength={100} />
        <Title>Answer</Title>
        <Input maxLength={1000} />
      </SubContainer>
    </AddCardContainer>
  )
}

export default AddCardView
