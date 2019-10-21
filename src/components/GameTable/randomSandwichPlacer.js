// Takes in an array of ship types to place (if none is provided, uses the standard set):
export const randomSandwichPlacer = (typesArray = [5, 4, 6, 3, 2]) => {
  const ships = [];

  const rand = max => Math.floor(Math.random() * Math.floor(max));

  const collisionCheck = newCoord => {
    if (
      ships.filter(coord => {
        if (newCoord.substring(3) === coord.substring(3)) {
          return coord;
        }
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const edgeCheck = (prevCoord, newCoord) => {
    if (
      (prevCoord.substring(3, 4) === '0' && newCoord.substring(3, 4) === '1') ||
      (prevCoord.substring(3, 4) === '1' && newCoord.substring(3, 4) === '0') ||
      (prevCoord.substring(4) === '0' && newCoord.substring(4) === '1') ||
      (prevCoord.substring(4) === '1' && newCoord.substring(4) === '0')
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getNewDir = checkedDir => {
    if (checkedDir.length === 0) {
      return rand(4);
    } else if (checkedDir.length === 1) {
      const dirLookup = { 0: 2, 1: 3, 2: 0, 3: 1 };
      return dirLookup[checkedDir[0]];
    } else if (checkedDir.length === 2) {
      if (checkedDir[0] % 2 === 0) {
        return rand(2) === 0 ? 1 : 3;
      } else {
        return rand(2) === 0 ? 0 : 2;
      }
    } else {
      return !checkedDir.includes(0)
        ? 0
        : !checkedDir.includes(1)
        ? 1
        : !checkedDir.includes(2)
        ? 2
        : 3;
    }
  };

  const addCoord = (prevCoord, currentDir) => {
    switch (currentDir) {
      case 0:
        if (prevCoord.slice(3, 4) === '9') {
          return prevCoord.slice(0, 3) + '0' + prevCoord.slice(4);
        } else return (parseInt(prevCoord, 10) + 10).toString();
        break;
      case 1:
        if (prevCoord.slice(4) === '9') {
          return prevCoord.slice(0, 4) + '0';
        } else return (parseInt(prevCoord, 10) + 1).toString();
        break;
      case 2:
        if (prevCoord.slice(3, 4) === '0') {
          return prevCoord.slice(0, 3) + '9' + prevCoord.slice(4);
        } else return (parseInt(prevCoord, 10) - 10).toString();
        break;
      case 3:
        if (prevCoord.slice(4) === '0') {
          return prevCoord.slice(0, 4) + '9';
        } else return (parseInt(prevCoord, 10) - 1).toString();
        break;
      default:
        console.log('addCoord switch error');
    }
  };

  const placeShip = type => {
    const shipLength = type === 6 ? 3 : type;
    let tempPlace = [];
    let checkedDir = [];
    // If there aren't enough ship coordinates then the ship hasn't been placed - keep running this loop:
    while (tempPlace.length < shipLength) {
      // If there is no starting coord, make one:
      while (tempPlace.length === 0) {
        const coordCand = (32000 + type * 100 + rand(100)).toString();
        if (!collisionCheck(coordCand)) {
          tempPlace.push(coordCand);
          console.log(`coord: ${coordCand}`);
        }
      }

      if (checkedDir.length === 0 || checkedDir.length === 2) {
        // Here we're trying a new orientation, so we need to clear any coordinates other than the starting coordinate (though there may not be any additional coordinates):
        tempPlace = [tempPlace[0]];
        const currentDir = getNewDir(checkedDir);
        checkedDir.push(currentDir);
        let dirFailed = false;
        while (tempPlace.length < shipLength && !dirFailed) {
          const prevCoord = tempPlace[tempPlace.length - 1];
          const coordCand = addCoord(prevCoord, currentDir);
          if (collisionCheck(coordCand) || edgeCheck(prevCoord, coordCand)) {
            dirFailed = true;
            console.log(`direction failed: ${coordCand}`);
          } else {
            tempPlace.push(coordCand);
            console.log(`coord: ${coordCand}`);
          }
        }
        continue;
      }

      if (checkedDir.length === 1 || checkedDir.length === 3) {
        const currentDir = getNewDir(checkedDir);
        checkedDir.push(currentDir);
        let newDir = true;
        let dirFailed = false;
        let prevCoord = '';
        while (tempPlace.length < shipLength && !dirFailed) {
          // Since we want to try the other direction we go back to the starting coordinate (but only if this is the first coordCand for this directions:
          if (newDir) {
            prevCoord = tempPlace[0];
            newDir = false;
          } else {
            prevCoord = tempPlace[tempPlace.length - 1];
          }
          const coordCand = addCoord(prevCoord, currentDir);
          if (collisionCheck(coordCand) || edgeCheck(prevCoord, coordCand)) {
            dirFailed = true;
            console.log(`direction failed: ${coordCand}`);
          } else {
            tempPlace.push(coordCand);
            console.log(`coord: ${coordCand}`);
          }
        }
        continue;
      }

      if (checkedDir.length === 4 && tempPlace.length < shipLength) {
        // If all 4 directions have been tested for the current starting coordinate and the ship is still not ready to be placed, reset the following to prepare to choose another starting coordinate:
        tempPlace = [];
        checkedDir = [];
        console.log('starting coordinate failed');
      }
    }
    const typeLookup = {
      2: 'destroyer',
      3: 'submarine',
      6: 'cruiser',
      4: 'battleship',
      5: 'carrier'
    };
    console.log(`${typeLookup[type]} placed: ${tempPlace}\n`);
    tempPlace.forEach(coord => ships.push(coord));
  };

  // Loops through the array of ship types:

  typesArray.forEach(type => {
    placeShip(type);
  });

  console.log('ship placement complete', '\n');

  return ships;
};
