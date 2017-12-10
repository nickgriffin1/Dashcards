import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const ListViewContainer = styled.View`
  height: 100%;
  width: 100%;
`

const HeaderText = styled.Text`
  font-size: 36px;
  color: white;
  text-align: center;
  margin-top: 50px;
`

const ListViewItemContainer = styled.TouchableOpacity`
  border: 1px solid #ffe700;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
`

const ListViewItemHeader = styled.Text`
  font-size: 24px;
  color: white;
`

const ListViewItemDescription = styled.Text`
  font-size: 16px;
  color: white;
`

const PlusIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 50px;
  z-index: 100;
  background-color: transparent;
`

class ListView extends React.Component {
  state = {
    items: [0, 0, 0, 0, 0, 0, 0, 0],
  }
  render() {
    const { items } = this.state
    return (
      <ListViewContainer>
        <PlusIcon>
          <Ionicons name='ios-add-circle-outline' color='white' size={50}/>
        </PlusIcon>
      	<View>
          <HeaderText>DashCards{/*<Ionicons name='wind' color='white' size={30}/>*/}</HeaderText>
        </View>
        {items.map((item, index) => (
          <ListViewItemContainer key={index}>
            <ListViewItemHeader>Header Example</ListViewItemHeader>
            <ListViewItemDescription>Lorum Ipsum example texto balogna</ListViewItemDescription>
          </ListViewItemContainer>
        ))}
      </ListViewContainer>
    )
  }
}

export default ListView
