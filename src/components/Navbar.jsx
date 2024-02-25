import { Link } from "react-router-dom";
import '../style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>
            <p>Home</p>
            </Link>
            <Link to={"/menu"}>
            <p>Menu</p>
            </Link>
            <div className="userAccess">
            <Link to={"/login"}>
            <p>Login</p>
            </Link>
            <Link to={"/register"}>
            <p>Register</p>
            </Link>
            </div>
        </div>
    )
}

export default Navbar;