import "./Navbar.css"
import logo from "./assets/images/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <img src={logo}></img>
            </div>
            <div className="nav-right">
                <a href="#">Why diversity</a>
                <a href="#">Resources</a>
                <a href="#">Create Teams</a>
                <a href="#">Start Blending</a>
            </div>
        </nav>
    )
}

export default Navbar
