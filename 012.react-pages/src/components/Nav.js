import React from 'react';
import './Nav.css';

const Nav = React.createClass({
    render: function(){
        var buttons = this.props.titles.map((title, index) => {
            return (
                <NavButton 
                    key={index} 
                    id={index}
                    click={this.props.update}
                    title={title} >
                </NavButton>
            )
        });
        return (
            <div className="nav">
            <h2>{this.props.page}</h2>
                <div className="nav-buttons">{buttons}</div>
            </div>
        )
    }
})

const NavButton = React.createClass({
    click: function(e){
        e.preventDefault();
        this.props.click(this.props.id);
    },
    render: function(){
        return (
            <a  onClick={this.click} 
                href="#"
                className='nav-button' 
                role="button" >
                    {this.props.title}
            </a>
        )    
    }
})

export default Nav;
