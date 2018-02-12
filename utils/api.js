import { AsyncStorage } from 'react-native';

export function getDecks() {
  console.log('Invoking utils/api: getDecks');
  const decks = [];
  AsyncStorage.getAllKeys().then((keys) => {
    const finalIndex = keys.length - 1;
    keys.forEach((key, index) => (
      AsyncStorage.getItem(key).then((deck) => {
        const data = JSON.parse(deck);
        decks.push(data);
        if (index === finalIndex) {
          return decks;
        }
      })
    ));
  });
}

export function getDeck(key) {
  console.log('Invoking utils/api: getDeck');
  return AsyncStorage.getItem(key).then(deck => JSON.parse(deck));
}

export function saveDeckTitle(title) {
  console.log('Invoking utils/api: saveDeckTitle');
  return AsyncStorage.mergeItem(title, JSON.stringify({
    title,
    questions: [],
  }));
}

export function addCardToDeck({ title, question, answer }) {
  console.log('Invoking utils/api: addCardToDeck');
  return AsyncStorage.mergeItem(title, JSON.stringify({
    questions: [{
      question,
      answer,
    }],
  }));
}
