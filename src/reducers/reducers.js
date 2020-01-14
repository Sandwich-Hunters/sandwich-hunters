import boardMaker from '../game_functions/boardMaker';

let initialState = JSON.parse(localStorage.getItem('appState'));

if (!initialState) {
  initialState = {
    view: 'showEnemy',
    iso: 'flat',
    enemyGrid: boardMaker(10),
    playerGrid: boardMaker(10),
    ginghamColors: ['green', 'red', 'black', 'blue'],
    enemyGingham: 'red',
    playerGingham: 'blue',
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

    case 'FLIP_PLAYER_GINGHAM': {
      const tempPlayerGingham = action.payload.color;
      return { ...state, playerGingham: tempPlayerGingham };
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
      return { ...state, playerGrid: tempGameGrid };
    }

    default:
      return state;
  }
};
