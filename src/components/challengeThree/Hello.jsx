import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
            <div className='btnHello'>
                Hello {this.props.countryName}. Population: {this.props.population}
            </div>
        );
    }
}

export default Hello;