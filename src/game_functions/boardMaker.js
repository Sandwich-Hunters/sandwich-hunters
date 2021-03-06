export default function boardMaker(gridsize) {
  const emptyGrid = [];
  for (let i = 1; i <= gridsize; i += 1) {
    for (let j = 1; j <= gridsize; j += 1) {
      emptyGrid.push({
        active: false, // true if clicked, click again to confirm
        empty: true, // false if a sandwich exists here
        id: `${i === 10 ? '0' : i}${j === 10 ? '0' : j}`, // accomdate grid starting from 1 and ending on 0
        played: 'unplayed', // 'hit' || 'miss'
      });
    }
  }
  return emptyGrid;
}
