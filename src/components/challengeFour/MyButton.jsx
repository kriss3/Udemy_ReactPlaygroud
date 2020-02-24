import React, { Component } from 'react';

class MyButton extends Component {

    localClickHandler = ()=> {
        this.props.clickHandler(this.props.increment);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.localClickHandler}> +{this.props.increment} </button>
            </div>
        );
    }
}

export default MyButton;