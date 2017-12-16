import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopSpacer from './components/TopSpacer'
import ListView from './components/ListView'
import AddDeckView from './components/AddDeckView'
import AddQuestionsView from './components/AddQuestionsView'
import DetailView from './components/DetailView'
import QuizView from './components/QuizView'
import AddViewIcon from './components/AddViewIcon'

const Stack = StackNavigator({
  Home: {
    screen: ListView,
    path: '/',
    navigationOptions: {
      title: 'DashCards',
      headerStyle: { backgroundColor: 'transparent' },
      headerTitleStyle: { color: 'white' }
    }
  },
  AddDeck: {
    screen: AddDeckView,
    path: 'add/deck',
    navigationOptions: {
      title: 'Add Deck',
      headerStyle: { backgroundColor: 'transparent' },
      headerTitleStyle: { color: 'white' }
    }
  },
  AddQuestions: {
    screen: AddQuestionsView,
    path: 'add/question/:id',
    navigationOptions: {
      title: 'Add Question',
      headerStyle: { backgroundColor: 'transparent' },
      headerTitleStyle: { color: 'white' }
    }
  },
  Detail: {
    screen: DetailView,
    path: 'details/:id',
    navigationOptions: {
      title: 'DashCard Details',
      headerStyle: { backgroundColor: 'transparent' },
      headerTitleStyle: { color: 'white' }
    }
  },
  Quiz: {
    screen: QuizView,
    path: 'quiz/:id',
    navigationOptions: {
      title: 'Dashcard Quiz',
      headerStyle: { backgroundColor: 'transparent' },
      headerTitleStyle: { color: 'white' }
    }
  }
})

const App = function() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='#333' barStyle='light-content'/>
      <Stack />
    </View>
  )
}

export default App
