export default function decks(state = [], action) {
    switch (action.type) {
      case 'ADD_DECK_TITLE':
        return [
          ...state,
          {
            title: action.title,
            questions: []
          }
        ]
      case 'ADD_CARD':
        let currentDeck = state.filter(deck => deck.title === action.title)
        currentDeck.questions.push({
          question: action.question,
          answer: action.answer
        })
        return [
          ...state.filter(deck => deck.title !== action.title),
          currentDeck
        ]
      default:
        return state
    }
}
