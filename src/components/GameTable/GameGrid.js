import React from 'react';
import GridSquare from './GridSquare';
import '../../scss/GameGrid.scss';

class GameGrid extends React.Component {
  state = {
    grid: [],
    coords: this.props.coords
  };
  render() {
    const { grid } = this.state;
    return (
      <section className="GameGrid">
        <div className="top-labels">
          <label className="top">1</label>
          <label className="top">2</label>
          <label className="top">3</label>
          <label className="top">4</label>
          <label className="top">5</label>
          <label className="top">6</label>
          <label className="top">7</label>
          <label className="top">8</label>
          <label className="top">9</label>
          <label className="top">10</label>
        </div>

        <div className="left-labels">
          <label className="left">A</label>
          <label className="left">B</label>
          <label className="left">C</label>
          <label className="left">D</label>
          <label className="left">E</label>
          <label className="left">F</label>
          <label className="left">G</label>
          <label className="left">H</label>
          <label className="left">I</label>
          <label className="left">J</label>
        </div>
        <main>
          {grid.map(s => (
            <GridSquare key={s.id} s={s} />
          ))}
        </main>
      </section>
    );
  }

  componentDidMount() {
    let updateGrid = boardMaker(10);
    let nums = this.props.coords.map(c => c.slice(3));
    console.log({ nums });
    updateGrid = updateGrid.map(s => {
      if (nums.includes(s.id)) {
        return { ...s, open: false };
      } else return s;
    });
    this.setState({ ...this.state, grid: updateGrid });
  }
}

export default GameGrid;

function boardMaker(gridsize) {
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
