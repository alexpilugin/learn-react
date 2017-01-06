import React from 'react';

import './styles/ProgressBar.css';

const ProgressBar = React.createClass({
  render() {
    return (
    <div className="ProgressBar" style={{height: this.props.height +'%'}}>
        <span style={{height: this.props.value +'%'}}></span>
    </div>
    );
  }
})

ProgressBar.propTypes = {
    height: React.PropTypes.number,
    value: React.PropTypes.number,
}
ProgressBar.defaultProps = {
    height: 50,
    value: 50,
}

export default ProgressBar;