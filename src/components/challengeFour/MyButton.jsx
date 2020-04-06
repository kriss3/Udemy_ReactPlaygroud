import React, { Component } from 'react';
import { Input } from 'antd';

class MyButton extends Component {

    localClickHandler = ()=> {
        this.props.clickHandler(this.props.increment);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.localClickHandler}> +{this.props.increment} </button>
                <Input></Input>
            </div>
        );
    }
}

export default MyButton;