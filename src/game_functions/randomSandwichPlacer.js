// EXAMPLE DATA from randomSandwichPlacer
// FIRST NUMBER is ??
// SECOND NUMBER is ??
// THIRD NUMBER is TYPE of sandwich
// FOURTH NUMBER is X Coordinate
// FIFTH NUMBER is Y Coordinate
// X and Y grid coordinates start at 1 on the left, count up to 9, and end with 0 on the right
// const coordsArray = [
//   '32517',
//   '32527',
//   '32537',
//   '32547',
//   '32557',
//   '32431',
//   '32421',
//   '32411',
//   '32441',
//   '32677',
//   '32676',
//   '32675',
//   '32346',
//   '32356',
//   '32366',
//   '32290',
//   '32299'
// ];

// Takes in an array of ship types to place (if none is provided, uses the standard set):
export default function randomSandwichPlacer(typesArray = [5, 4, 6, 3, 2]) {
  const ships = [];

  const rand = (max) => Math.floor(Math.random() * Math.floor(max));

  const collisionCheck = (newCoord) => {
    if (
      ships.filter((coord) => newCoord.substring(3) === coord.substring(3))
        .length > 0
    ) return true;
    return false;
  };

  const edgeCheck = (prevCoord, newCoord) => {
    if (
      (prevCoord.substring(3, 4) === '0' && newCoord.substring(3, 4) === '1') ||
      (prevCoord.substring(3, 4) === '1' && newCoord.substring(3, 4) === '0') ||
      (prevCoord.substring(4) === '0' && newCoord.substring(4) === '1') ||
      (prevCoord.substring(4) === '1' && newCoord.substring(4) === '0')
    ) {
      return true;
    }
    return false;
  };

  const getNewDir = (checkedDir) => {
    if (checkedDir.length === 0) {
      return rand(4);
    }
    if (checkedDir.length === 1) {
      const dirLookup = {
        0: 2,
        1: 3,
        2: 0,
        3: 1,
      };
      return dirLookup[checkedDir[0]];
    }
    if (checkedDir.length === 2) {
      if (checkedDir[0] % 2 === 0) {
        return rand(2) === 0 ? 1 : 3;
      }
      return rand(2) === 0 ? 0 : 2;
    }
    if (!checkedDir.includes(0)) return 0;
    if (!checkedDir.includes(1)) return 1;
    if (!checkedDir.includes(2)) return 2;
    return 3;
  };

  const addCoord = (prevCoord, currentDir) => {
    switch (currentDir) {
      case 0:
        if (prevCoord.slice(3, 4) === '9') {
          return `${prevCoord.slice(0, 3)}0${prevCoord.slice(4)}`;
        }
        return (parseInt(prevCoord, 10) + 10).toString();
      case 1:
        if (prevCoord.slice(4) === '9') {
          return `${prevCoord.slice(0, 4)}0`;
        }
        return (parseInt(prevCoord, 10) + 1).toString();
      case 2:
        if (prevCoord.slice(3, 4) === '0') {
          return `${prevCoord.slice(0, 3)}9${prevCoord.slice(4)}`;
        }
        return (parseInt(prevCoord, 10) - 10).toString();
      case 3:
        if (prevCoord.slice(4) === '0') {
          return `${prevCoord.slice(0, 4)}9`;
        }
        return (parseInt(prevCoord, 10) - 1).toString();
      default:
        // console.log('addCoord switch error');
        return 'addCoord switch error';
    }
  };

  const placeShip = (type) => {
    const shipLength = type === 6 ? 3 : type;
    let tempPlace = [];
    let checkedDir = [];
    // If there aren't enough ship coordinates then the ship hasn't been placed
    // - keep running this loop:
    while (tempPlace.length < shipLength) {
      // If there is no starting coord, make one:
      while (tempPlace.length === 0) {
        const coordCand = (32000 + type * 100 + rand(100)).toString();
        if (!collisionCheck(coordCand)) {
          tempPlace.push(coordCand);
          // console.log(`coord: ${coordCand}`);
        }
      }

      if (checkedDir.length === 0 || checkedDir.length === 2) {
        // Here we're trying a new orientation, so we need to clear any coordinates
        // other than the starting coordinate (though there may not be any additional coordinates):
        tempPlace = [tempPlace[0]];
        const currentDir = getNewDir(checkedDir);
        checkedDir.push(currentDir);
        let dirFailed = false;
        while (tempPlace.length < shipLength && !dirFailed) {
          const prevCoord = tempPlace[tempPlace.length - 1];
          const coordCand = addCoord(prevCoord, currentDir);
          if (collisionCheck(coordCand) || edgeCheck(prevCoord, coordCand)) {
            dirFailed = true;
            // console.log(`direction failed: ${coordCand}`);
          } else {
            tempPlace.push(coordCand);
            // console.log(`coord: ${coordCand}`);
          }
        }
        // continue;
      }

      if (checkedDir.length === 1 || checkedDir.length === 3) {
        const currentDir = getNewDir(checkedDir);
        checkedDir.push(currentDir);
        let newDir = true;
        let dirFailed = false;
        let prevCoord = '';
        while (tempPlace.length < shipLength && !dirFailed) {
          // Since we want to try the other direction we go back to the starting coordinate
          // (but only if this is the first coordCand for this directions:
          if (newDir) {
            [prevCoord] = tempPlace;
            newDir = false;
          } else {
            prevCoord = tempPlace[tempPlace.length - 1];
          }
          const coordCand = addCoord(prevCoord, currentDir);
          if (collisionCheck(coordCand) || edgeCheck(prevCoord, coordCand)) {
            dirFailed = true;
            // console.log(`direction failed: ${coordCand}`);
          } else {
            tempPlace.push(coordCand);
            // console.log(`coord: ${coordCand}`);
          }
        }
        // continue;
      }

      if (checkedDir.length === 4 && tempPlace.length < shipLength) {
        // If all 4 directions have been tested for the current starting coordinate
        // and the ship is still not ready to be placed, reset the following to
        // prepare to choose another starting coordinate:
        tempPlace = [];
        checkedDir = [];
        // console.log('starting coordinate failed');
      }
    }

    // console.log(`${typeLookup[type]} placed: ${tempPlace}\n`);
    tempPlace.forEach((coord) => ships.push(coord));
  };

  // Loops through the array of ship types:

  typesArray.forEach((type) => {
    placeShip(type);
  });

  // console.log('ship placement complete', '\n');

  return ships;
}
