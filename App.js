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
      headerRight: AddViewIcon
    }
  },
  AddDeck: {
    screen: AddDeckView,
    path: 'add/deck'
  },
  AddQuestions: {
    screen: AddQuestionsView,
    path: 'add/question/:id'
  },
  Detail: {
    screen: DetailView,
    path: 'detail/:id'
  },
  Quiz: {
    screen: QuizView,
    path: 'quiz/:id'
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
