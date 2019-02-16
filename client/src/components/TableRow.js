import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormDialog from './FormDialog';
// import { PropTypes } from 'react';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    loadBusiness() {

    }

    delete() {
        axios.get('/business/delete/'+this.props.obj._id)
            .then(this.props.loadmethod())
            .catch(err => console.log(err))
    }

    // handleClickOpen = (i) => {
      
    //   this.props.onClick(i);
    // };

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            {this.props.obj.person_email}
          </td>
          <td>
            <FormDialog noteId={this.props.obj._id} onClick={this.handleClickOpen} />
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;