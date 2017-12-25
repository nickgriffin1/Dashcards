import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { setIntialData, initialData } from './utils/initialData'
import configureStore from './store/configureStore'
import ListView from './components/ListView'
import AddDeckView from './components/AddDeckView'
import AddCardView from './components/AddCardView'
import DetailView from './components/DetailView'
import QuizView from './components/QuizView'
import AddViewIcon from './components/AddViewIcon'

const defaultStyle = {
  headerStyle: { backgroundColor: 'transparent' },
  headerTitleStyle: { color: 'white' }
}

const Stack = StackNavigator({
  Home: {
    screen: ListView,
    path: '/',
    navigationOptions: {
      title: 'DashCards 💨',
      ...defaultStyle
    }
  },
  AddDeck: {
    screen: AddDeckView,
    path: 'add/deck',
    navigationOptions: {
      title: 'New Deck',
      ...defaultStyle
    }
  },
  AddCard: {
    screen: AddCardView,
    path: 'add/card/:id',
    navigationOptions: {
      title: 'Add Card',
      ...defaultStyle
    }
  },
  Detail: {
    screen: DetailView,
    path: 'details/:id',
    navigationOptions: {
      title: 'DashCards Details',
      ...defaultStyle
    }
  },
  Quiz: {
    screen: QuizView,
    path: 'quiz/:id',
    navigationOptions: {
      title: 'Dashcards Quiz',
      ...defaultStyle
    }
  }
})

class App extends React.Component {
  componentDidMount() {
    setIntialData()
  }
  render() {
    const store = configureStore({ decks: initialData })
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle='light-content'/>
          <Stack />
        </View>
      </Provider>
    )
  }
}

export default App
