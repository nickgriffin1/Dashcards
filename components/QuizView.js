import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import StandardButton from './StandardButton'

const QuizContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: black;
  justify-content: flex-start;
  align-items: center;
`
const Counter = styled.Text`
  font-size: 16px;
  color: white;
  align-self: flex-start;
  margin-left: 20px;
`
const QuizText = styled.Text`
  font-size: 24px;
  color: white;
  margin: 30px
  align-self: center;
`
const AnswerButton = styled.TouchableOpacity`
  width: 30%;
  color: white;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
`
const AnswerButtonText = styled.Text`
  font-size: 12px;
  color: white;
`
const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
class QuizView extends React.Component {
  state = {
    currentIndex: 0,
    showAnswer: false,
    correct: 0,
    done: false
  }
  componentDidMount() {
    const { navigation, decks } = this.props
    this.setState({
      length: decks
        .filter(deck =>
          deck.title === navigation.state.params.title
        )[0].questions.length
    })
  }
  answered = (correct) => {
    const { currentIndex, length } = this.state
    if (correct) {
      this.setState(prevState => ({
        correct: prevState.correct + 1,
        showAnswer: false,
        currentIndex: prevState.currentIndex + 1
      }))
    } else {
      this.setState(prevState => ({
        showAnswer: false,
        currentIndex: prevState.currentIndex + 1
      }))
    }
    if (currentIndex + 1 === length) {
      this.setState({ done: true })
    }
  }
  getPercentCorrect = () => {
    const percent = this.state.correct / this.state.length
    return Math.round(percent * 100)
  }
  restartQuiz = () => {
    this.setState({
      currentIndex: 0,
      showAnswer: false,
      correct: 0,
      done: false
    })
  }
  render() {
    const { currentIndex, showAnswer, done } = this.state
    const { decks, navigation } = this.props
    const { title } = navigation.state.params
    const currentDeck = decks.filter(deck => deck.title === title)[0]
    return (
      <View>
        {done ?
          <QuizContainer>
            <QuizText>Finished</QuizText>
            <QuizText>
              {this.getPercentCorrect()}% correct
            </QuizText>
            <StandardButton
              text='Restart Quiz'
              color='#39ff14'
              action={() => this.restartQuiz()}
            />
          </QuizContainer> :
          <QuizContainer>
            <Counter>{currentIndex + 1}/{currentDeck.questions.length}</Counter>
            <QuizText>{currentDeck.questions[currentIndex].question}</QuizText>
            {showAnswer ?
              <QuizText>{currentDeck.questions[currentIndex].answer}</QuizText> :
              <AnswerButton onPress={() => this.setState({ showAnswer: true })}>
                <AnswerButtonText>View Answer</AnswerButtonText>
              </AnswerButton>
            }
            <ButtonContainer>
              <StandardButton
                text='Correct'
                color='#39ff14'
                action={() => this.answered(true)}
              />
              <StandardButton
                text='Incorrect'
                color='#ff1744'
                action={() => this.answered(false)}
              />
            </ButtonContainer>
          </QuizContainer>
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(QuizView)
