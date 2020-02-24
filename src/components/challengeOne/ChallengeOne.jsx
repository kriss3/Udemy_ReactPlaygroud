import React, { Component } from 'react';

class ChallengeOne extends Component {
    
    render() {
        const myStyle = {
            width: 250,
            height: 250
        };
        return (
            <div>
                <img src='http://www.clipartbest.com/cliparts/7ei/My9/7eiMy9ycn.jpeg' 
                    alt='test text' style={myStyle} /> 
            </div>
        );
    }
}

export default ChallengeOne;