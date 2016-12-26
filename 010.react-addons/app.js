/*
https://facebook.github.io/react/docs/animation.html
  |
  Cells
  ShowNumbersButton
  ShuffleButton
  LevelButton
*/

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)} className='item'>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


ReactDOM.render(
  <TodoList />,
  document.getElementById('content')
);