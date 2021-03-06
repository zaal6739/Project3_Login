import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
    
  
  
    this.state = {
    open: false,
    person_name: '',
    business_name: '',
    business_gst_number:'',
    person_email:'',
    person_note:''

  }
}

componentDidMount() {
  axios.get('/business/edit/'+this.props.noteId)
      .then(response => {
          // console.log(this.props.match.params.id);
          this.setState({ 
            person_name: response.data.person_name, 
            business_name: response.data.business_name,
            business_gst_number: response.data.business_gst_number,
            person_email: response.data.person_email,
            person_note: response.data.person_note
          });
      })
      .catch(function (error) {
          console.log(error);
      })
}

  onChangeName(e) {
    this.setState({
      person_name: e.target.value
    })
  }
  
  onChangeEmail(e) {
    this.setState({
      person_email: e.target.value
    })
  }
 
  onChangeNumber(e) {
    this.setState({
    business_gst_number: e.target.value
    })
  }
  
    
  onChangeNote(e) {
        this.setState({
        person_note: e.target.value
        })
    }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit(e) {
    e.preventDefault();
    this.handleClose();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      person_email: this.state.person_email,
      person_note: this.state.person_note
    }
    console.log(obj);
    axios.post('/business/update/'+this.props.noteId, obj)
        .then(res => console.log(res.data));
    
    
  }
  

  

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        <img id="note" src={require('../img/note.png')} alt="note" />
        </Button>
        <Dialog
          className="textfieldid"
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change</DialogTitle>
          <DialogContent >
            <DialogContentText >
             Add a note or edit the client: 
            </DialogContentText>
            <TextField
              fullWidth={true}
              maxWidth={'md'}
              style={{fontSize: '30%' }}
              autoFocus
              onChange={this.onChangeNote}
              value={this.state.person_note || ''}
              margin="dense"
              label="Note"
              type="text"
              fullwidth='true'
            />
            <br />
             <TextField
              fullWidth={true}
              maxWidth = {'md'}
              style={{fontSize: '30%' }}
              onChange={this.onChangeName}
              value={this.state.person_name || ''}
              margin="dense"
              label="name"
              type="text"
              fullwidth='true'
            />
            <br />
            <TextField
              fullWidth={true}
              maxWidth = {'md'}
              onChange={this.onChangeEmail}
              value={this.state.person_email || ''}
              margin="dense"
              label="email"
              type="email"
              fullwidth='true'
            />
            <br />
            <TextField
              fullWidth={true}
              maxWidth = {'md'}
              onChange={this.onChangeNumber}
              value={this.state.business_gst_number || ''}
              margin="dense"
              label="number"
              type="number"
              fullwidth='true'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary"  style={{fontSize: '180%'}}>
              Cancel
            </Button>
            <Button type='submit' onClick={this.onSubmit} color="primary" style={{fontSize: '200%'}} >
              Change
              </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}