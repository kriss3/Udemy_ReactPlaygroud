import React, { Component } from 'react';
import MyButton from './MyButton';
import Result from './Result';

class TopLevel extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : 0
        }
    };

    handleClick = (increment)=> {
        this.setState({
            result: this.state.result + increment
        });
    }

    render() {
        return (
            <div>
                <MyButton increment={1} clickHandler={this.handleClick} />
                <MyButton increment={5} clickHandler={this.handleClick} />
                <MyButton increment={10} clickHandler={this.handleClick} />
                <Result myResult={this.state.result} />
            </div>
        );
    }
}

export default TopLevel;