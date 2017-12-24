import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
import StandardButton from './StandardButton'

const AddContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubContainer = styled.View`
  height: 50%;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
const Title = styled.Text`
  font-size: 32px;
  color: white;
`
const SubTitle = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 10px;
`
const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
`
class AddDeckView extends React.Component {
  state = {
    title: ''
  }
  submitTitle = () => {
    this.props.navigation.navigate('AddCard', { topic: this.state.title })
  }
  render() {
    return (
      <AddContainer>
        <SubContainer>
          <Title>Title</Title>
          <SubTitle>Max length 50 characters</SubTitle>
          <Input
            maxLength={50}
            ref={el => this.title = el}
            value={this.state.title}
            onChangeValue={() => this.setState({ title: this.title })}
          />
          <StandardButton
            action={() => submitTitle()}
            text='Add'
            color='white'
          />
        </SubContainer>
      </AddContainer>
    )
  }
}

export default AddDeckView
