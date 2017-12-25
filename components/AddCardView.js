import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import styled from 'styled-components/native'
import StandardButton from './StandardButton'
import { addCard } from '../actions'

const AddCardContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  justify-content: flex-start;
  align-items: center;
`
const SubContainer = styled.View`
  height: 80%;
  width: 90%;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`
const Input = styled.TextInput`
  width: 80%;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
`
class AddCardView extends React.Component {
  state = {
    question: '',
    answer: '',
  }
  handleSubmit = () => {
    const title = this.props.navigation.state.params.title
    this.props.addCard({
      title,
      question: this.state.question,
      answer: this.state.answer
    })
    this.props.navigation.navigate('Detail', { title })
  }
  render() {
    const { title } = this.props.navigation.state.params
    return (
      <AddCardContainer>
        <SubContainer>
          <Title>Add a card to { title }</Title>
          <Title>Question</Title>
          <Input
            maxLength={100}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <Title>Answer</Title>
          <Input
            maxLength={1000}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <StandardButton
            text='Submit'
            color='white'
            action={() => this.handleSubmit()}
          />
        </SubContainer>
      </AddCardContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: data => dispatch(addCard(data)),
  }
}

export default connect(null, mapDispatchToProps)(AddCardView)
