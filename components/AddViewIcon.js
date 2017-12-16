import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const PlusIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 50px;
  z-index: 100;
  background-color: transparent;
`

const AddViewIcon = () => (
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
