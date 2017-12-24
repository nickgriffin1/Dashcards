import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styled from 'styled-components/native'
import StandardButton from './StandardButton'

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
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`
const Input = styled.TextInput`
  width: 80%;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
`
const AddCardView = function({ navigation }) {
  const { title } = navigation.state.params
  handleSubmit = () => {
    
  }
  return (
    <AddCardContainer>
      <SubContainer>
        <Title>Add a card to { title }</Title>
        <Title>Question</Title>
        <Input maxLength={100} />
        <Title>Answer</Title>
        <Input maxLength={1000} />
        <StandardButton
          text='Submit'
          color='white'
          action={() => handleSubmit()}
        />
      </SubContainer>
    </AddCardContainer>
  )
}

export default AddCardView
