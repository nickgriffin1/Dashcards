import { saveDeckTitle, addCardToDeck } from '../utils/api'
import { saveDeckTitle } from '../utils/api'

export function initializeData(data) {
  saveDeckTitle(title)
  return {
    type: 'INITIALIZE_DATA',
    data
  }
}

export function addDeckTitle(title) {
  saveDeckTitle(title)
  return {
    type: 'ADD_DECK_TITLE',
    title
  }
}

export function addCard({ title, answer, question }) {
  return {
    type: 'ADD_CARD',
    title,
    answer,
    question
  }
}
