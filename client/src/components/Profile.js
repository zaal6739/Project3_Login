import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import axios from "axios";

import { Route } from 'react-router-dom';

import Create from "./Create";
import Mail from "./Mail";
import ClientList from "./ClientList";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            open_tab: 0,
            company_name: '',
            email: '',
            business: []
        }
        this.loadBusiness=this.loadBusiness.bind(this);
    }

    componentDidMount () {
        this.loadBusiness()
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            company_name: decoded.company_name,
            email: decoded.email,
        })
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

    render () {
        return (
// Navbar
            <div className="personal">
            
            <div className="text-right">
            <nav className="navbar navbar-dark bg-dark justify-content-between" >
            <a className="navbar-brand" style={{color:"purple"}}>Navbar</a>
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav> </div>
            
        


{/* sidebar */}
        <div className="sidebar-nav">
            <a href="personal-profile.html" title="Profile">
                <img src="../../img/facade.png" alt="User name" className="img-circle img-user"></img>
            </a>
            <h2 className="text-center hidden-xs"><a href="personal-profile.html" title="Profile">Welcome, {this.state.company_name}!</a></h2>
            
            <p className="text-center user-description hidden-xs">
                 <i>This is your homepage, navigate by clicking on the tabs!</i>
            </p>
        </div>
        
        <div className="content-posts profile-content">
        <div className="banner-profile">
        </div>


 {/* navbar with actions */}
        <ul className="nav nav-tabs" role="tablist">
            <li className="{open_tab ? 0 => 'active':''}"><a href="#posts" role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">Client Signup</a></li>
            <li><a href="#profile" role="tab" id="emailTab" data-toggle="tab" aria-controls="profile" aria-expanded="true">Mail Clients</a></li>
            <li><a href="#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="true">List of Clients</a></li>
        </ul>

     
        <div className="tab-content">

 {/* 'create' a new business tab */}
            <div className="{open_tab ? 0 => 'active':''}" role="tabpanel" id="posts" aria-labelledby="postsTab">
                <div id="posts-container" className="container-fluid container-posts" style={{ backgroundColor:"white"}}>
               
             <div className="card-post">
                <div className="row">
                {/* <Route exact component={ Create } /> */}
                <Create loadmethod={this.loadBusiness} />
                              </div>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 data-post">
                               
                                <div className="reaction">
                                 
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loading">
                    <img src="img/load.gif" alt="loader"/>
                </div>
            </div>
{/* mail tab */}
            <div className="tab-pane fade" role="tabpanel" id="profile" aria-labelledby="emailTab">
                <div className="container-fluid container-posts" style={{ backgroundColor:"white"}}>
                    <div className="card-post" >
                    <div className='row'>
                    <Route exact component={ Mail } />
                    </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" role="tabpanel" id="chat" aria-labelledby="emailTab">
                <div className="container-fluid container-posts" style={{ backgroundColor:"white"}}>
                    <div className="card-post" >
                    <div className='row'>
                    {/* <Route exact component={ ClientList } /> */}
                    <ClientList data={this.state.business} loadmethod={this.loadBusiness} />
                    </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
        </div>
       
           
        )
    }
}

export default Profile