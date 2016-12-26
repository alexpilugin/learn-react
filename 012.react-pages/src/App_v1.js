import React from 'react';
import Feature from './components/Feature';
import Container from './components/Container';
/*
App
  Container
    Nav
    Lead
    Row
      Feature
        FeautureButton
*/

const App = React.createClass({
  getInitialState: function () {
    return {
        page: 0,
        pages: [{
            'title': 'Home',
            'features': [{
                'title': "First things | Home",
                'active': false
              },{
                'title': 'Second things | Home',
                'active': false
              },{
                'title': 'Third things | Home',
                'active': false
              }]
          }, {
            'title': 'About',
            'features': [{
                'title': "First things | About",
                'active': false
              },{
                'title': 'Second things | About',
                'active': false
              },{
                'title': 'Third things | About',
                'active': false
              }]
        }]
    };
  },
  pageUpdate: function(index) {
    this.setState({page: index})
  },
  featureUpdate:function(index, e){
    e.preventDefault();
    var pages = this.state.pages;
    pages[this.state.page].features[index].active = !pages[this.state.page].features[index].active;
    this.setState({pages:pages});
  },
  render() {
    var title = this.state.pages[this.state.page].title;
    return (
      <Container>
        <Nav 
          pages={this.state.pages.map( function(i){return i.title})}
          update={this.pageUpdate}
          page={title}
        />
        <Lead title = {title.toUpperCase()} />
        <Row>
          {this.state.pages[this.state.page].features.map(
            function(f, i){
              var featureUpdate = this.featureUpdate.bind(null,i)
              return (
                <Feature 
                  key = {i}
                  title = {f.title}
                  active = {f.active}
                  update = {featureUpdate}
                />)
            }
          )}
        </Row>
      </Container>
    );
  } 
})

export default App;
