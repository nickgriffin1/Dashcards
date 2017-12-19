import { saveDeckTitle, addCardToDeck } from '../utils/api'

export function addDeckTitle(title) {
  return {
    type: 'ADD_DECK_TITLE',
    title
  }
}

export function addCard(title, answer, question) {
  return {
    type: 'ADD_CARD',
    title,
    answer,
    question
  }
}
