import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native'
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
class ListView extends React.Component {
  /*getDecks = () => {
    AsyncStorage.getAllKeys().then(keys => {
      keys.map((key, index) => {
        AsyncStorage.getItem(key).then(deck => {
          const data = JSON.parse(deck)
          this.setState(prevState => ({
            decks: [
              ...prevState.decks.filter(deck => deck.title !== data.title),
              data
            ]
          }))
        })
      })
    })
  }*/
  render() {
    return (
      <ListViewContainer>
        <ScrollView>
          {this.props.decks.length > 0 && this.props.decks.map(item => (
            <Deck
              key={item.title}
              title={item.title}
              numCards={item.questions ? item.questions.length : 0}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
        <AddViewIcon navigation={this.props.navigation} />
      </ListViewContainer>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(ListView)
