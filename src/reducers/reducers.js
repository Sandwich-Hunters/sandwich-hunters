import boardMaker from '../game_functions/boardMaker';

let initialState = JSON.parse(localStorage.getItem('appState'));

if (!initialState) {
  initialState = {
    view: 'showTop',
    iso: 'flat',
    gameGrid: boardMaker(10),
    myGrid: boardMaker(10),
    ginghamColors: ['green', 'red', 'black', 'blue'],
    gameGingham: 'red',
    myGingham: 'blue',
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_GRID': {
      const tempGrid = [...state.gameGrid];
      const { index } = action.payload;
      tempGrid[index].active = true;
      return { ...state, gameGrid: tempGrid };
    }

    case 'FLIP_GAME_GINGHAM': {
      const tempGameGingham = action.payload.color;
      return { ...state, gameGingham: tempGameGingham };
    }

    case 'FLIP_MY_GINGHAM': {
      const tempMyGingham = action.payload.color;
      return { ...state, myGingham: tempMyGingham };
    }

    case 'FLIP_TABLE': {
      const tempView = action.payload.newView;
      return { ...state, view: tempView };
    }

    case 'FLIP_ISO': {
      const tempIso = action.payload.newIso;
      return { ...state, iso: tempIso };
    }

    case 'RANDOM_ENEMY_PLACEMENT': {
      const tempGameGrid = action.payload.updateGrid;
      return { ...state, gameGrid: tempGameGrid };
    }

    case 'RANDOM_PLAYER_PLACEMENT': {
      const tempGameGrid = action.payload.updateGrid;
      return { ...state, myGrid: tempGameGrid };
    }

    default:
      return state;
  }
};
