import React from 'react';
import './styles/App.css';
import ProgressBar from './ProgressBar';
import myData from './data.json';
//import Client from './Client';

const App = React.createClass({
  interval: null,
  getInitialState: function () {
    return {
      bars: [],
    };
  },
  componentDidMount() {
    this.loadData();
    this.interval = setInterval(this.updateData, 2000);
  },
  componentWillUnmount(){
    clearInterval(this.interval);  
  },
  loadData() {
    this.setState({bars : myData});
  },
  updateData(){
    this.setState({
      bars : this.state.bars.map((item) => {
        const maxH = item.height;
        const v = Math.floor(Math.random()*maxH);
        return Object.assign({}, item, {value: v} );
      })
    })
  },
  render() {
    const bars = this.state.bars.map((item) => {
      return (
        <ProgressBar 
          key={item.id}
          height={item.height} 
          value={item.value} />  
      );
    });
    return (
      <div className="App">
        {bars} 
      </div>
    );
  }
})

export default App;
