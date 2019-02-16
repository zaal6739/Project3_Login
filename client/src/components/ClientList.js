import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class ClientList extends Component {
    _isMounted = false;

constructor(props) {
    super(props);
    this.state = {business: []}
    this.loadBusiness = this.loadBusiness.bind(this);

}

componentDidMount() {
    this.loadBusiness();
}


loadBusiness = () => {
    axios
      .get('/business')
      .then(response => {
          this.setState({
            business: response.data,
          });
      });
  };

tabRow(){
    // loop through business array and return them as table rows
    return this.state.business.map(function(object, i) {
        // console.log(object, i);
        return <TableRow obj={object} key={i} loadmethod={this.loadBusiness} />
    }, this);
}


render() {
    return (
    <div>
        <h3 align="center" >Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
                <th>Persons</th>
                <th>Business</th>
                <th>GST Number</th>
                <th>Email</th>
                <th>Note</th>
                <th colSpan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            {/* populate the table with business response data */}
            {this.tabRow()}
        </tbody>
        </table>
    </div>
    )
}
}