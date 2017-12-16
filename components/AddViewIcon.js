import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const PlusIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  margin-left: 20px;
  margin-top: 630px;
  z-index: 100;
  background-color: transparent;
`

const AddViewIcon = ({ navigation }) => (
  <PlusIcon>
    <Ionicons
      name='ios-add-circle-outline'
      color='#ff1744'
      size={50}
      onPress={() => navigation.navigate('AddDeck')}
    />
  </PlusIcon>
)

export default AddViewIcon
