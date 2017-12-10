import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import TopSpacer from './components/TopSpacer'
import MainView from './components/MainView'

const App = function() {
  return (
    <View>
      <StatusBar backgroundColor="black"/>
      <MainView />
    </View>
  )
}

export default App
