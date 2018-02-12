import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import StandardButton from './StandardButton';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

const DetailContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DetailSubContainer = styled.View`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailHeader = styled.Text`
  color: white;
  font-size: 24px;
`;

const SubHeader = styled.Text`
  color: white;
  font-size: 18px;
`;

const DetailView = ({ navigation, decks }) => {
  const { title } = navigation.state.params;
  const currentDeck = decks.filter(deck => deck.title === title)[0];
  function startQuiz() {
    navigation.navigate('Quiz', { title });
    clearLocalNotification().then(setLocalNotification);
  }
  return (
    <DetailContainer>
      <DetailSubContainer>
        <DetailHeader>{ title }</DetailHeader>
        <SubHeader>{ currentDeck.questions ? currentDeck.questions.length : 0 } cards</SubHeader>
        <StandardButton
          action={() => navigation.navigate('AddCard', { title })}
          text="Add Card"
          color="white"
        />
        <StandardButton
          isDisabled={!currentDeck.questions || currentDeck.questions.length === 0}
          action={() => startQuiz()}
          text="Start Quiz"
          color="#39ff14"
        />
      </DetailSubContainer>
    </DetailContainer>
  );
};

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(DetailView);
