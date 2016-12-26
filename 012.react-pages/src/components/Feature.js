import React from 'react';
import FeatureButton from './FeatureButton';
import './Feature.css';

const Feature = React.createClass({
    render: function(){
        return (
            <div className="col-3">
                <h2>{this.props.title}</h2>
                <p>
                    {this.props.text}
                </p>
                <p>
                    <FeatureButton
                        update={this.props.update}
                        active={this.props.active}
                    />
                </p>
            </div>
        )
    }
});

export default Feature;