import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { } from 'react-navigation'
import styled from 'styled-components/native'
import ListView from './ListView'
import NotFoundView from './NotFoundView'

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #333;
`

const MainView = function() {
  return (
    <ScrollView>
      <MainContainer>
        <ListView />
      </MainContainer>
    </ScrollView>
  )
}

export default MainView
