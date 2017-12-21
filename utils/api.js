import { AsyncStorage } from 'react-native'

export function getDeck(key) {
  return AsyncStorage.getItem(key).then(deck => JSON.parse(deck))
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(title, JSON.stringify({}))
}

export function addCardToDeck({ title, question, answer }) {
  return AsyncStorage.mergeItem(title, JSON.stringify({
    questions: [{
      question,
      answer
    }]
  }))
}
