import { StackNavigator } from 'react-navigation'
import ListView from './ListView'
import AddDeckView from './AddDeckView'
import AddCardView from './AddCardView'
import DetailView from './DetailView'
import QuizView from './QuizView'

const defaultStyle = {
  headerStyle: { backgroundColor: 'transparent' },
  headerTitleStyle: { color: 'white' }
}

export default Stack = StackNavigator({
  Home: {
    screen: ListView,
    path: '/',
    navigationOptions: {
      title: 'DashCards',
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
      title: 'Details',
      ...defaultStyle
    }
  },
  Quiz: {
    screen: QuizView,
    path: 'quiz/:id',
    navigationOptions: {
      title: 'Quiz',
      ...defaultStyle
    }
  }
})
