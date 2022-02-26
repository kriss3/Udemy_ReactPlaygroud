import React, {Component} from 'react';

export default class MyTComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            someVal: 100,
            btnName: 'Click Here!'
        }
    }

    handleClick = (e) => {
        alert('Display some value from the current state')
    }

    render(){
        return( 
            <>
                <div>
                    <label>My Label For Component I will be TESTING</label><br/>
                    <button onClick={(e)=>this.handleClick(e)}>{this.state.btnName}</button>
                </div>
            </>
        );
    }
}