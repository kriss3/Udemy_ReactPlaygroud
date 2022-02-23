
import React from 'react';


class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    };

    componentDidMount(){
        this.blahId = setInterval(
            ()=>this.tick(), 1000
        );
    };

    componentWillUnmount(){
        clearInterval(this.blahId);
    };

    tick() {
        this.setState({time: new Date().toLocaleString()});
    };

    render(){
        return(
        <p className='App-clock'>
            The date and time is: {this.state.time}.
        </p>
    )};


};

export default Clock;