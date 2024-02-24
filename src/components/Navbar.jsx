import { Link } from "react-router-dom";
import '../style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>
            <p>Home</p>
            </Link>
            <Link to={"/Menu"}>
            <p>Menu</p>
            </Link>
            <div className="userAccess">
            <Link to={"/Login"}>
            <p>Login</p>
            </Link>
            <Link to={"/Register"}>
            <p>Register</p>
            </Link>
            </div>
        </div>
    )
}

export default Navbar;