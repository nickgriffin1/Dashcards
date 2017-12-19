import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const AddQuestionsContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubContainer = styled.View`
  height: 80%;
  width: 90%;
  background-color: #333;
  border-radius: 20px;
`
const Title = styled.Text`
  font-size: 30px;
  color: white;
`
const AddQuestionView = function() {
  return (
    <AddQuestionContainer>
      <SubContainer>
      </SubContainer>
    </AddQuestionContainer>
  )
}

export default AddQuestionView
