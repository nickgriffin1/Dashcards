export default function decks(state = [], action) {
  switch (action.type) {
    case 'ADD_DECK_TITLE':
      console.log('Invoking reducer - ADD_DECK_TITLE:', action);
      return [
        ...state,
        {
          title: action.title,
          questions: [],
        },
      ];
    case 'ADD_CARD': {
      console.log('Invoking reducer - ADD_CARD:', action);
      const currentDeck = state.filter(deck => deck.title === action.title)[0];
      currentDeck.questions.push({
        question: action.question,
        answer: action.answer,
      });
      return [
        ...state.filter(deck => deck.title !== action.title),
        currentDeck,
      ];
    }
    default:
      return state;
  }
}
