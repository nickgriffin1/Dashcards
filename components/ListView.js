import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Deck from './Deck';
import AddViewIcon from './AddViewIcon';

const ListViewContainer = styled.View`
  height: 1000;
  width: 100%;
  background-color: black;
`;

const ListView = ({ decks, navigation }) => (
  <ListViewContainer>
    <ScrollView>
      {decks.length > 0 && decks.map(item => (
        <Deck
          key={item.title}
          title={item.title}
          numCards={item.questions ? item.questions.length : 0}
          navigation={navigation}
        />
      ))}
    </ScrollView>
    <AddViewIcon navigation={navigation} />
  </ListViewContainer>
);

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(ListView);
