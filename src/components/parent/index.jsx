import React, {Component} from "react";
import Child from "../../components/child/index";



class Parent extends Component { 
    constructor(props){
        super(props);
        this.state = {
            firstName: "  TEST   "
        };
    }

    render() {
        return(
            <Child fName= {this.state.firstName} trimming={ fName => this.setState({firstName: fName })}  />
        );
    };

}

export default Parent;