const App = React.createClass({
    getInitialState(){
        return { fxData : [] }
    },
    componentDidMount() {
      this.loadData();
    },
    /* Generate a short UID (4 chars)
    * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
    */
    shortUID() {
        return ( '0000' + ( Math.random() * Math.pow( 36, 4 ) << 0 ).toString( 36 ) ).slice( -4 );
    },
    loadData() {
        //https://davidwalsh.name/websocket
        const url = 'wss://fx.now.sh/'; 
        io(url).on("data", (responce) => {
            this.setState({ fxData: responce});
            //console.log('Received: ', responce);
        });
    },
    render() {
      //console.log(this.state.fxdata);
      if(this.state.fxData){
        var counter = 0;
        const list = this.state.fxData.map((item) => {
          counter++;  
          return (
            <div key={this.shortUID()} className="currencyPair">
              <p><span>{counter} : {item.currencyPair}</span> 
                <span>bidBig:{item.bidBig}</span>  
                <span>bidPips:{item.bidPips}</span> 
                <span>offerBig:{item.offerBig}</span> 
                <span>offerPips:{item.offerPips}</span> 
                <span>high:{item.high}</span> 
                <span>low:{item.low}</span> 
                <span>open:{item.open}</span>
              </p> 
            </div>
          )
        });
       return  (
          <div className="App">
            {list}
          </div>
       ) 
      } else {
        return (
          <div className="currencyPair">
           There is some problem with data fetching!
          </div>
        )
      }
    }
});

ReactDOM.render(<App />, document.getElementById('container'));