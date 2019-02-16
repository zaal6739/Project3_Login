import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:'',
      person_email:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      person_email: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    document.getElementById('focus').focus();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      person_email: this.state.person_email
    };
    axios.post('/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: '',
      person_email: ''
    })
  }
 
  render() {
    return (
        <div style={{ backgroundColor:"white",marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text"
                      id="focus" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="tel" 
                      className="form-control"
                      value={this.state.business_gst_number || ''}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Person Email: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.person_email || ''}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary" style={{background: "#f3ad00", marginTop: "10px"}}/>
                </div>
            </form>
        </div>
    )
  }
}