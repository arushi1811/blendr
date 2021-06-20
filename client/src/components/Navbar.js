import "./Navbar.css"
import logo from "./assets/images/logo.png"
import {NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <NavLink to="/"><img alt="logo" src={logo}></img></NavLink>
            </div>
            <div className="nav-right">
                <NavLink activeStyle={{borderBottom:"3px solid #B858F2"}} exact to="/">Why Diversity</NavLink>
                <NavLink activeStyle={{borderBottom:"3px solid #B858F2"}} to="create">Create Teams</NavLink>
                <NavLink activeStyle={{borderBottom:"3px solid #B858F2"}} to="enroll">Enter Code</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
