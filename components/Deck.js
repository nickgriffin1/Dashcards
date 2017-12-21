import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const DeckItemContainer = styled.View`
  min-height: 70px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: #333;
`
const DeckItemHeader = styled.Text`
  font-size: 24px;
  color: white;
  margin-right: 60px;
`
const DeckItemDescription = styled.Text`
  font-size: 16px;
  color: white;
  margin-right: 60px;
`
const DeckButton = styled.TouchableOpacity`
  background-color: transparent;
  right: 0;
  position: absolute
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 5px;
  width: 65px;
  border: 1px solid white;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: #18ffff;
`
const DeckButtonText = styled.Text`
  text-align: center;
  color: white;
  color: #18ffff;
`
function Deck(props) {
  console.log('props', props)
  return (
    <DeckItemContainer>
      <DeckItemHeader>{ props.title }</DeckItemHeader>
      <DeckItemDescription>{ props.numCards } cards</DeckItemDescription>
      <DeckButton onPress={() => props.navigation.navigate('Detail')}>
        <DeckButtonText>VIEW</DeckButtonText>
      </DeckButton>
    </DeckItemContainer>
  )
}

export default Deck
