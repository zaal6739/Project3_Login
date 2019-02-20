import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        // const loginRegLink = (
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
        //             <Link to="/login" className="nav-link">
        //                 Login
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/register" className="nav-link">
        //                 Register
        //             </Link>
        //         </li>
        //     </ul>
        // )

       

        return (
         

            <li><a href="/" onClick={this.logOut.bind(this)} style={{padding:"10px", fontsize:"12px"}}>Logout</a></li>
           
        )
    }
}

export default withRouter(Navbar)
// export default Navbar