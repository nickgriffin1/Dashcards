import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import StandardButton from './StandardButton'

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
const DetailView = function({ navigation }) {
  const { title } = navigation.state.params
  return (
    <DetailContainer>
      <DetailSubContainer>
        <DetailHeader>{ title }</DetailHeader>
        <StandardButton
          action={() => navigation.navigate('AddCard', { title })}
          text='Add Card'
          color='white'
        />
        <StandardButton
          action={() => navigation.navigate('Quiz', { title })}
          text='Start Quiz'
          color='#39ff14'
        />
      </DetailSubContainer>
    </DetailContainer>
  )
}

export default DetailView
