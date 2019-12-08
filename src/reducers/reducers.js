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
    case 'UPDATE_GRID': {
      const tempGrid = [...state.grid];
      const { index } = action.payload;
      tempGrid[index].active = true;
      return { ...state, grid: tempGrid };
    }

    default:
      return state;
  }
};
