import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Create from "./Create";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            company_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            company_name: decoded.company_name,
            email: decoded.email,
        })
    }

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
            <li class="active"><a href="#posts" role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">Client Signup</a></li>
            <li><a href="#profile" role="tab" id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="true">Profile</a></li>
            <li><a href="#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="true">Notes</a></li>
        </ul>

     
        <div class="tab-content">

 {/* 'create' a new business tab */}
            <div class="tab-pane fade active in" role="tabpanel" id="posts" aria-labelledby="postsTab">
                <div id="posts-container" class="container-fluid container-posts">
               
             <div class="card-post">
                <div class="row">
                <Route exact component={ Create } />

      

                        </div>
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 data-post">
                               
                                <div class="reaction">
                                 
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loading">
                    <img src="img/load.gif" alt="loader"/>
                </div>
            </div>
            <div class="tab-pane fade" role="tabpanel" id="profile" aria-labelledby="profileTab">
                <div class="container-fluid container-posts">
                    <div class="card-post">
                        <ul class="profile-data">
                            <li><b>Company:</b> ZGlobal</li>
                            <li><b>Username:</b>Zaal6739</li>
                            <li><b>Industry</b>Energy</li>
                            
                        </ul>
                        <p><a href="" title="edit profile"><i class="fa fa-pencil" aria-hidden="true"></i> Edit profile</a></p>
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