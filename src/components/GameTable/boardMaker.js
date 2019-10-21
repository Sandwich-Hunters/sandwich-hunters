export function boardMaker(gridsize) {
  const myGrid = [];
  for (let i = 1; i <= gridsize; i++) {
    for (let j = 1; j <= gridsize; j++) {
      myGrid.push({
        active: false, //true if clicked, click again to confirm
        open: true, //false if a sandwich exists here
        id: `${i === 10 ? '0' : i}${j === 10 ? '0' : j}`, //accomdate grid starting from 1 and ending on 0
        played: null // 'hit' || 'miss'
      });
    }
  }
  return myGrid;
}
