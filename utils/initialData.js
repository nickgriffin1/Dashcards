import { AsyncStorage } from 'react-native'

export const initialData = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
];

export function setIntialData() {
  Object.keys(initialData).forEach((key) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(initialData[key]));
    } catch (error) {
      console.log('Error in setting initial data', error);
    }
  });
}
