export default function decks(state = {}, action) {
    switch (action.type) {
      case 'ADD_DECK_TITLE':
        return state
      case 'ADD_CARD':
        return state
      default:
        return state
    }
}
