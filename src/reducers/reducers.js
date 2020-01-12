import boardMaker from '../game_functions/boardMaker';

let initialState = JSON.parse(localStorage.getItem('appState'));

if (!initialState) {
  initialState = {
    view: 'showTop',
    iso: 'flat',
    enemyGrid: boardMaker(10),
    myGrid: boardMaker(10),
    ginghamColors: ['green', 'red', 'black', 'blue'],
    enemyGingham: 'red',
    myGingham: 'blue',
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_GRID': {
      const tempGrid = [...state.enemyGrid];
      const { index } = action.payload;
      tempGrid[index].active = true;
      return { ...state, enemyGrid: tempGrid };
    }

    case 'FLIP_ENEMY_GINGHAM': {
      const tempEnemyGingham = action.payload.color;
      return { ...state, enemyGingham: tempEnemyGingham };
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
      return { ...state, enemyGrid: tempGameGrid };
    }

    case 'RANDOM_PLAYER_PLACEMENT': {
      const tempGameGrid = action.payload.updateGrid;
      return { ...state, myGrid: tempGameGrid };
    }

    default:
      return state;
  }
};
