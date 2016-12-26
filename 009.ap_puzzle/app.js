/*
GameField
  |
  Cells
  ShowNumbersButton
  ShuffleButton
  LevelButton
*/

var GameField = React.createClass({
  randOrd: function () {
    return (Math.round(Math.random())-0.5);
  },

  clickShowHideNumbers: function () {
    this.setState({ isShowNumbers : !this.state.isShowNumbers});
  },

  clickLevel: function (level) {
    this.setState ({
      image: 'img' + level,
    })
  },

  shuffle: function () {
    var N = 25;  //0...24
    var numbers = Array.apply(null, {length: N}).map(Number.call, Number);
    //numbers.shift(); //remove zerro element
    numbers.sort( this.randOrd );

    this.setState({
      cells: numbers.map((number) =>{
        return Object.assign({},{
          number: number,
          /* other proporties of a cell */
        })
      })
    });
  },

  getInitialState: function () {
      var N = 25;  //0...24
      var numbers = Array.apply(null, {length: N}).map(Number.call, Number);
      //numbers.shift(); //remove zerro element
      numbers.sort( this.randOrd );
      
      var firstCell = null;
      var secondCell = null;
      var isClickedFirst = false;
      var isShowNumbers = true;

      var cells = numbers.map((number) => {
        return Object.assign({},{
          number: number,
          /* other proporties of a cell */
        })
      });

      //console.log(cells);

      var image = 'img1';

      return {
        cells,
        isClickedFirst,
        firstCell,
        secondCell,
        isShowNumbers,
        image,
      };
    },

  onCellClick: function (cellId) {
    if (this.state.isClickedFirst == false) {
      this.state.firstCell = cellId;
      this.state.isClickedFirst = true;
    } else if (this.state.isClickedFirst == true){
      this.state.secondCell = cellId;
      this.setState({
        isClickedFirst: false,
        cells: this.state.cells.map((cell) =>{
          if (cell.number === this.state.firstCell) {
            return Object.assign({}, cell, {
              number: this.state.secondCell
            })
          } else if (cell.number === this.state.secondCell){
            return Object.assign({}, cell, {
              number: this.state.firstCell
            })
          } else return cell; 
        })
      })
    }
  },

  render: function () {
    var cells = this.state.cells.map((cell) => (
      <Cell 
        key={cell.number}
        number={cell.number}
        onCellClick={this.onCellClick}
        showNumber={this.state.isShowNumbers}
        image={this.state.image}
      />
    ));
    return (
      <div className='field'>
          {cells}
          <ShowNumbersButton 
            btnClick={this.clickShowHideNumbers}
            showNumber={this.state.isShowNumbers}
          />
          <ShuffleButton 
            clickShuffle={this.shuffle}
          />
          <LevelButton 
          level = '1'
          onLevelClick = {this.clickLevel}
          />
          <LevelButton 
          level = '2'
          onLevelClick = {this.clickLevel}
          />
          <LevelButton 
          level = '3'
          onLevelClick = {this.clickLevel}
          />
      </div>
    )
  }
});

var LevelButton = React.createClass ({
  handleClick: function () {
    this.props.onLevelClick(this.props.level);
  },
  render: function (){
    return (
      <button  className='level-btn' 
        onClick={this.handleClick}>
        {this.props.level}
      </button>     
    )
  }
});

var ShuffleButton = React.createClass ({
  render: function () {
    return (
      <button  className='btn' 
        onClick={this.props.clickShuffle}>
        Shuffle
      </button> 
    )
  }
});

var ShowNumbersButton = React.createClass({
  render: function () {
    if (this.props.showNumber == true){
      return (
        <button  className='btn' 
          onClick={this.props.btnClick}>
          Hide numbers
        </button>
      )
    } else {
      return (
        <button  className='btn' 
          onClick={this.props.btnClick}>
          Show numbers
        </button>
      )
    }

  }
});

var Cell = React.createClass({
  handleClick: function () {
    this.props.onCellClick(this.props.number);
  },
  moveBackground: function () {
    var dy = (this.props.number / 5);
    dy = dy - (dy % 1);  //rounding
    var dx = (this.props.number % 5);
    const cellSize = 108;
    dy = - (dy * cellSize);
    dx = -(dx * cellSize);

    console.log(this.props.number + " dx: " + dx + " dy: " + dy);

    const divStyle = {
      backgroundPosition: dx + 'px ' + dy + 'px',
    }
    return divStyle;
  },

  render: function () {
    if (this.props.showNumber == true){
      return (
        <div 
          className={'cell ' + this.props.image}
          style={this.moveBackground()} 
          onClick={this.handleClick} 
        >
          {this.props.number + 1}
        </div>
      )      
    } else {
      return (
        <div 
          className={'cell ' + this.props.image}
          style={this.moveBackground()} 
          onClick={this.handleClick} 
        >
        </div>
      ) 
    }

  }
});

ReactDOM.render(
  <GameField />,
  document.getElementById('content')
);