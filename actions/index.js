import { saveDeckTitle, addCardToDeck } from '../utils/api';

export function initializeData(data) {
  console.log('Invoking actions: initializeData');
  return {
    type: 'INITIALIZE_DATA',
    data,
  };
}

export function addDeckTitle({ title }) {
  console.log('Invoking actions: addDeckTitle');
  saveDeckTitle(title);
  return {
    type: 'ADD_DECK_TITLE',
    title,
  };
}

export function addCard({ title, answer, question }) {
  console.log('Invoking actions: addCard');
  addCardToDeck({ title, answer, question });
  return {
    type: 'ADD_CARD',
    title,
    answer,
    question,
  };
}
