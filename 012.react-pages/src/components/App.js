import React from 'react';
import Feature from './Feature';
import Container from './Container';
import Nav from './Nav';
/*
App
  Container
    Nav
      NavButton
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
                'title': "First things",
                'active': false,
                'text': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              },{
                'title': 'Second things',
                'active': false,
                'text': "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },{
                'title': 'Third things',
                'active': false,
                'text': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
              }]
          }, {
            'title': 'About',
            'features': [{
                'title': "About first things",
                'active': false,
                'text': "In hac habitasse platea dictumst. Nullam urna metus, finibus sit amet nisl vitae, vulputate pretium ligula. Donec mattis sit amet justo posuere molestie. Integer fringilla nisl hendrerit ante sagittis, eget faucibus nisi mollis. Nunc faucibus lorem et consectetur eleifend. Curabitur vitae sem tempus, suscipit dui quis, accumsan libero. Maecenas nec luctus mauris. Proin maximus blandit metus, in fermentum felis scelerisque vel. Donec aliquet efficitur libero vitae finibus. Fusce nec lacus tempor, lobortis arcu eget, malesuada erat. Ut non quam tempus, fringilla magna vitae, maximus diam. Phasellus eget diam sit amet ex malesuada congue."
              },{
                'title': 'About second things',
                'active': false,
                'text': "Nam molestie tincidunt nulla, vel scelerisque nulla aliquet sit amet. Ut nec consectetur elit, vitae malesuada ligula. Nam non dictum nunc. Cras in facilisis dolor, eget faucibus justo. Vivamus ut tincidunt enim. Nullam mattis erat nec ipsum cursus, viverra cursus nulla malesuada. Nunc in lectus augue. Fusce posuere fermentum leo, quis malesuada leo pretium quis. Integer nec mi et mi maximus mollis."
              },{
                'title': 'About third things',
                'active': false,
                'text': "In hac habitasse platea dictumst. Nulla facilisi. Nunc nec ex velit. Aenean imperdiet sem vel est tristique, eu imperdiet nisi ultricies. Quisque bibendum varius nibh non congue. Vivamus feugiat vulputate velit, eget molestie metus dignissim eget. Sed ut vulputate urna. Mauris nibh ligula, pretium non rutrum vel, imperdiet ut nibh. Vestibulum a odio vitae quam vulputate posuere vel a ipsum. Cras nec odio quis purus finibus commodo. Nam et massa lectus. Mauris ullamcorper lacus metus, et rutrum sapien auctor vitae. Mauris non rhoncus velit."
              }]
        }, {
            'title': 'Contacts',
            'features': [{
                'title': "Contact by email",
                'active': false,
                'text': "Mauris interdum porta lacus eget gravida. Sed bibendum leo nec dolor finibus, ornare scelerisque eros volutpat. Curabitur sagittis sagittis ante in convallis. Nunc eu lorem augue. Aliquam dolor nisi, tristique ut laoreet sed, cursus iaculis quam. Quisque rhoncus dui quis orci malesuada interdum. Integer posuere augue a gravida pretium. Nam iaculis, erat eu fermentum imperdiet, nisl justo mollis augue, vel mollis justo dolor at diam. Donec vel tellus et velit congue ullamcorper sed at massa. Sed non mollis ipsum. Nullam dui massa, fermentum ut tincidunt ac, semper in ipsum. In ullamcorper est et nisl finibus efficitur."
              },{
                'title': 'Contact by Phone',
                'active': false,
                'text': "Etiam vel lacus eget dolor ultricies rhoncus. Nulla nec nunc sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tempor orci a mauris ullamcorper, vitae pellentesque leo tincidunt. Aenean venenatis eros quis tincidunt malesuada. Sed finibus rhoncus urna, sit amet sollicitudin libero interdum non. Donec egestas, urna vitae tempor semper, risus lorem pharetra est, sit amet cursus sapien ligula et est."
              },{
                'title': 'Contact by telepathy',
                'active': false,
                'text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a quam id tellus euismod porttitor. Pellentesque ac viverra nunc, eu cursus ipsum. In hac habitasse platea dictumst. Donec molestie ex ac euismod placerat. Aliquam faucibus, dolor non fermentum sollicitudin, nisl nibh sollicitudin ipsum, a porta nunc velit et urna. Nam sed porta erat. Proin dapibus sollicitudin sapien. Fusce ultricies venenatis enim, vel vulputate lorem dapibus nec."
              }]
        }
        ]
    };
  },
  pageUpdate: function(index) {
    this.setState({page: index})
  },
  featureUpdate: function(index, e){
    e.preventDefault();
    var pages = this.state.pages;
    pages[this.state.page].features[index].active = !pages[this.state.page].features[index].active;
    this.setState({pages:pages});
  },
  render() {
    console.log(this.state.page);
    var title = this.state.pages[this.state.page].title;
    console.log(title);
    return (
      <Container>
        <Nav 
          titles={this.state.pages.map( (page) => page.title )}
          update={this.pageUpdate}
          page={title}
        />
        <div className='features'>
          {this.state.pages[this.state.page].features.map(
            (f, i) => {
                var featureUpdate = this.featureUpdate.bind(null,i)
                return (
                  <Feature 
                    key={i}
                    title={f.title}
                    active={f.active}
                    text={f.text}
                    update={featureUpdate}
                  />)
              }
            )}
          </div>
      </Container>
    );
  } 
})

export default App;
