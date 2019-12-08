import boardMaker from '../game_functions/boardMaker';
import randomSandwichPlacer from '../game_functions/randomSandwichPlacer';

const blankGrid = boardMaker(10);
const coordsArray = randomSandwichPlacer();

// grab the coordinates and map them to the grid
const coords = coordsArray.map((c) => c.slice(3));
const updateGrid = blankGrid.map((s) => {
  if (coords.includes(s.id)) {
    return { ...s, open: false };
  }
  return s;
});

let initialState = JSON.parse(localStorage.getItem('appState'));

if (!initialState) {
  initialState = {
    view: 'showTop',
    iso: 'flat',
    grid: updateGrid,
    coords,
    allGingham: ['green', 'red', 'black', 'blue'],
    myGingham: 'blue',
    gameGingham: 'red',
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
