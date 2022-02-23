import React, { Component } from 'react';
import {isValidPostalCode} from '../utils/utils';

class HWorld extends Component {
    constructor(props){
        super(props);
        this.state = {
            myLength: 6,
            selectedValue: ''
        }
    }

    validatePC = () => {
        let caCountry = 'CA';
        let usCountry = 'US'
        let zip = '88888999-9'
        let res = isValidPostalCode(zip.toUpperCase(), usCountry);
        alert(res);
    };

    handleDdlChange = e => {
        let c = e.target.value;
        alert(c);
        if(c === 'Canada')
            this.setState({myLength: 6});
        else if (c==='US')    
            this.setState({myLength: 10});
        else {
            alert('Select different.')
        } 
    };


    render() {
        return (
            <div>
                Hello World!!!
                <button onClick={this.validatePC} >Validate</button>
                <select value={this.state.selectedValue} onChange={this.handleDdlChange}>
                    <option value=''>Select</option>
                    <option value='Canada'>Canada</option>
                    <option value='US'>US</option>
                </select>
                <input maxLength={this.state.myLength}></input>
            </div>
        );
    }
}

export default HWorld;