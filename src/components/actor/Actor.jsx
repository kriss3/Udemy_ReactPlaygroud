import React, { Component } from 'react';

import './Actor.css'

class Actor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Alfred',
            job: 'Developer'
        }
    }
    
    handleClick = function(msg) {
        alert('The job is: ' + msg);
        this.setState({name: 'John'});
          
    };

    render() {
        return (
            <div onClick={()=>this.handleClick(this.state.job)}>
                My name is {this.state.name} <br/> and I work as a {this.state.job}.
            </div>
        );
    }
}

export default Actor;