import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const DetailContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DetailSubContainer = styled.View`
  height: 300px;
  width: 300px;
  background-color: #333;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DetailHeader = styled.Text`
  color: white;
  font-size: 24px;
`
const DetailButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 20px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 3px;
`
const DetailButtonText = styled.Text`
  color: white;
  font-size: 24px;
`

const DetailView = function({ name, navigation }) {
  return (
    <DetailContainer>
      <DetailSubContainer>
        <DetailHeader>Name Goes Here</DetailHeader>
        <DetailButton>
          <DetailButtonText onPress={() => navigation.navigate('AddQuestions')}>Add Card</DetailButtonText>
        </DetailButton>
        <DetailButton>
          <DetailButtonText onPress={() => navigation.navigate('Quiz')}>Start Quiz</DetailButtonText>
        </DetailButton>
      </DetailSubContainer>
    </DetailContainer>
  )
}

export default DetailView
