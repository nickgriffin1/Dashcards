import { AsyncStorage } from 'react-native'

export function getDecks() {
  const decks = []
  AsyncStorage.getAllKeys().then(keys => {
    const finalIndex = keys.length - 1
    keys.map((key, index) => {
      AsyncStorage.getItem(key).then(deck => {
        const data = JSON.parse(deck)
        decks.push(data)
        if (index === finalIndex) {
          return decks
        }
      })
    })
  })
}

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
