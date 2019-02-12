import React, { Component } from 'react';
import axios from 'axios';

class GetValues extends Component {
    state = {
        values: []
      }
    componentDidMount() {
        axios.get('http://localhost:64729/api/values')
        .then(
            (data)=> this.setState({values: data}),
            (err) => console.log('--problem request--')
        );
    }
    render() { 
        console.log('----props----', this.props);
        return ( 
            <div>
                <h1>Values</h1>
            </div>
         );
    }
}
 
export default GetValues;