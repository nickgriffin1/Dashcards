impprt { AsyncStorage } from 'react-native'

export function getDecks() {
  return AsyncStorage.getAllKeys()
    .then(keys => JSON.parse(keys)
    .map(key => {
      AsyncStorage.getItem(key).then
    })
}

export function getDeck(key) {
  return AsyncStorage.getItem(key)
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem('SOMETHING', JSON.stringify({
    [title]: { title }
  }))
}

export function addCardToDeck({ title, question, answer }) {
  return AsyncStorage.mergeItem('SOMETHING', JSON.stringify({
    [title]: {
      questions: [{
        question,
        answer
      }]
    }
  }))
}
