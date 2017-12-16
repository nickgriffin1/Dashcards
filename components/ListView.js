import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import Deck from './Deck'
import AddViewIcon from './AddViewIcon'

const ListViewContainer = styled.View`
  height: 1000;
  width: 100%;
  background-color: black;
`

const ListViewHeader = styled.View`
  height: 110px;
  z-index: 1000;
  border-bottom-color: #1de9b6;
  border-bottom-width: 1px;
  margin-top: 50px;
`

const HeaderText = styled.Text`
  font-size: 36px;
  color: white;
  text-align: center;
  margin-top: 50px;
`

function ListView({ navigation }) {
  return (
    <ListViewContainer>
      <ScrollView>
        {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
          <Deck
            key={index}
            title={item}
            desciption={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <AddViewIcon navigation={navigation} />
    </ListViewContainer>
  )
}

export default ListView
