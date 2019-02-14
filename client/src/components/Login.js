import React, { Component } from 'react'
import { login } from './UserFunctions'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render () {
        return (
           <div className ="login-page">

            <div className="form-box">

                <div className="form-logo">
                    <p className= "text-center"><img src='./img/logo.png' alt='logo'></img></p>
                </div>

                <form noValidate onSubmit={this.onSubmit}>
      
               <div><input type = 'text' className='form-control' name="email" placeholder='Enter Email' value={this.state.email} onChange={this.onChange}/></div>
               <div><input type = 'password' className='form-control' name="password" placeholder='Password' value={this.state.password} onChange={this.onChange}/></div>
               <button type="submit" className="btn btn-sm btn-primary btn-block" style={{background: "#f3ad00", marginTop: "10px"}}>
                               Login
                            </button>
                   
                    <a href="./Register" className="login-action" title="Register">
                    <p style={{padding:"10px", fontsize:"12px"}}>New User?</p>
                    </a></form>
                    </div></div>
                 

        )
    }
}

export default Login