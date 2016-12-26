import React from 'react';

const FeatureButton = React.createClass({
    click: function(e){
        e.preventDefault();
        this.props.update();
    },
    render: function(){
        return (
            <a
            onClick={this.click}
            className={this.props.active && 'btn'}
            href="#"
            role="button" >
                Read more...
            </a>
            
        )
    }

});

export default FeatureButton;