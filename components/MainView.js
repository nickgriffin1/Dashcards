import React from 'react'
import { View, Text } from 'react-native'
import { } from 'react-navigation'
import styled from 'styled-components/native'
import ListView from './ListView'
import NotFoundView from './NotFoundView'

const MainContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainView = function() {
  return (
    <MainContainer>
      <Text>Main view is here</Text>
    </MainContainer>
  )
}

export default MainView
