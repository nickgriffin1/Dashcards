import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const QuizContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
`
const QuizView = function() {
  return (
    <QuizContainer>

    </QuizContainer>
  )
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(QuizView)
