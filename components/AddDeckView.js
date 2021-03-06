import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import StandardButton from './StandardButton';
import { addDeckTitle } from '../actions';

const AddContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SubContainer = styled.View`
  height: 50%;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 10px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  margin-top: 20px;
`;

class AddDeckView extends Component {
  state = {
    title: ''
  }
  
  submitTitle = () => {
    const title = this.state.title
    this.props.addDeckTitle({ title })
    this.props.navigation.navigate('Detail', { title })
  }

  render() {
    return (
      <AddContainer>
        <SubContainer>
          <Title>New Deck Title</Title>
          <Input
            maxLength={50}
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
          <SubTitle>Max length 50 characters</SubTitle>
          <StandardButton
            action={() => this.submitTitle()}
            text="Add"
            color="white"
          />
        </SubContainer>
      </AddContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeckTitle: data => dispatch(addDeckTitle(data)),
  };
}

export default connect(null, mapDispatchToProps)(AddDeckView);
