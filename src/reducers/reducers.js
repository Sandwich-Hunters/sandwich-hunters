let initialState = JSON.parse(localStorage.getItem('appState'));

if (!initialState) {
  initialState = {
    someData: [],
    someOtherData: [],
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const tempCards = [...state.cards, { ...action.payload }];
      return { ...state, cards: tempCards };
    }
    case 'MOVE_CARD_LEFT': {
      const tempCards = [...state.cards].map((card) => {
        const tempCard = { ...card };
        if (tempCard.id === action.payload.id) {
          if (tempCard.colNum === 0) tempCard.colNum = state.columns.length - 1;
          else tempCard.colNum -= 1;
        }
        return tempCard;
      });
      return { ...state, cards: tempCards };
    }
    case 'MOVE_CARD_RIGHT': {
      const tempCards = [...state.cards].map((card) => {
        const tempCard = { ...card };
        if (tempCard.id === action.payload.id) {
          if (tempCard.colNum === state.columns.length - 1) tempCard.colNum = 0;
          else tempCard.colNum += 1;
        }
        return tempCard;
      });
      return { ...state, cards: tempCards };
    }
    default:
      return state;
  }
};
