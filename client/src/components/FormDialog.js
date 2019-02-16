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
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.{this.props.noteId}
            </DialogContentText>
            <TextField
              autoFocus
              onChange={this.onChangeNote}
              value={this.state.person_note || ''}
              margin="dense"
              label="Note"
              type="text"
              fullwidth='true'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type='submit' onClick={this.onSubmit} color="primary" >
              Subscribe
              </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}