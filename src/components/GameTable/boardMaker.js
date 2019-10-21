export function boardMaker(gridsize) {
  const myGrid = [];
  for (let i = 0; i < gridsize; i++) {
    for (let j = 0; j < gridsize; j++) {
      myGrid.push({
        active: false, //true if clicked, click again to confirm
        open: true, //false if a sandwich exists here
        id: `${i}${j}`,
        played: null // 'hit' || 'miss'
      });
    }
  }
  return myGrid;
}
