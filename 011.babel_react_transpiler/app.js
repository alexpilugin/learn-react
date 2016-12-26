

class App extends React.Component {
        constructor(){
            super();
            this.state = {
                input: '/* add your jsx here like: class C extends Component {} */',
                output: '',
                err: ''
            }
        }
        update(e){
            let code = e.target.value;
            try {
                this.setState({
                    output: window.Babel
                    .transform(code, {presets: ['es2015', 'react']})
                    .code,
                    err: ''
                })
            }
            catch(err){
                this.setState({err: err.message})
            }
            var pre = document.getElementById('pre');
            if(typeof pre !== "undefined"){
              Prism.highlightElement(pre);
              //console.log(pre)
            }
            
        }
        render(){
            return (
                <div>
                    <div className="container">
                        <textarea 
                            onChange={this.update.bind(this)} 
                            onKeyUp={this.update.bind(this)} 
                            defaultValue={this.state.input}
                        />                       
                        <pre id="pre" className="language-javascript">{this.state.output}</pre> 
                    </div>
                    <footer>{this.state.err}</footer>
                </div>
            )
        }
    }

ReactDOM.render(<App />, document.getElementById('root') );

