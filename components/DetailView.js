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
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
const DetailButtonText = styled.Text`
  color: white;
  font-size: 24px;
`
const DetailView = function({ navigation }) {
  const { title } = navigation.state.params
  return (
    <DetailContainer>
      <DetailSubContainer>
        <DetailHeader>{ title }</DetailHeader>
        <DetailButton style={{borderColor: '#F3F315'}}>
          <DetailButtonText
            onPress={() => navigation.navigate('AddCard', { title })}
            style={{color: '#F3F315'}}
          >Add Card</DetailButtonText>
        </DetailButton>
        <DetailButton style={{borderColor: '#39ff14'}}>
          <DetailButtonText
            onPress={() => navigation.navigate('Quiz', { title })}
            style={{color: '#39ff14'}}
          >Start Quiz</DetailButtonText>
        </DetailButton>
      </DetailSubContainer>
    </DetailContainer>
  )
}

export default DetailView
