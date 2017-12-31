import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { setIntialData, initialData } from './utils/initialData'
import configureStore from './store/configureStore'
import { setLocalNotification } from './utils/helpers'
import Stack from './components/Stack'

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    const store = configureStore({ decks: initialData })
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle='light-content' />
          <Stack />
        </View>
      </Provider>
    )
  }
}

export default App
