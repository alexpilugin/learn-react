import React from 'react';

const Container = React.createClass({
    render: function(){
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }

});

export default Container;