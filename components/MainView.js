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
    <ScrollView
      style={{backgroundColor: '#333'}}
      contentContainerStyle={{backgroundColor: '#333'}}
      contentOffset={{y: 1000}}
    >
      <MainContainer style={{height: 1000}} >
        <ListView />
      </MainContainer>
    </ScrollView>
  )
}

export default MainView
