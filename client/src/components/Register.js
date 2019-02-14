import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            company_name: '',
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
            company_name: this.state.company_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div className ="login-page">

            <div className="form-box">

                <div className="form-logo">
                    <p className= "text-center"><img src='./img/logo.png' alt='logo'></img></p>
                </div>
{/* setup the form to input registration data */}
            <form noValidate onSubmit={this.onSubmit}>
                 <input type = 'text' className='form-control' name="company_name" placeholder='Enter Your Company Name' value={this.state.company_name} onChange={this.onChange}></input>
                <div><input type = 'text' className='form-control' name="email" placeholder='Enter Email' value={this.state.email} onChange={this.onChange}/></div>
                <div><input type = 'password' className='form-control' name="password" placeholder='Enter Password' value={this.state.password} onChange={this.onChange}/></div>
                 {/* <div><button type = 'submit' className='login' className='btn btn social' style={{background: "#f3ad00"}} value ='LOGIN'/></div> */}
                 <button type="submit" className="btn btn-sm btn-primary btn-block" style={{background: "#f3ad00", marginTop: "10px"}}>
                                Register
                            </button>
                    <a href="./Login" className="login-action" title="Sign in">
                    <p style={{padding:"10px", fontsize:"12px"}}>Already a User?</p>
                    </a></form>
                    </div></div>
        )
    }
}

export default Register