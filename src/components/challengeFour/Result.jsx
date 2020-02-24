import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <p> {this.props.myResult} </p>
            </div>
        );
    }
}

export default Result;