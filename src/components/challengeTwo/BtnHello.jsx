import React, { Component } from 'react';
import './BtnHello.css'

class BtnHello extends Component {
    render() {
        const myStyle = {
            backgroundColor: "green",
            color: "white"
        };
        return (
            <div>
                <input style={myStyle} type="button" value={this.props.country} />
            </div>
        );
    }
}

export default BtnHello;