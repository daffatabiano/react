import { useState } from "react";
import "../style.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notif, setNotif] = useState("");
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        const payload = {
            username: username,
            password: password,
        }
        setLoading(true)

        axios.post("https://api.mudoapi.tech/login", payload)
        .then((res) => { 
        const token = res?.data?.data?.token;
        localStorage.setItem("access_token",token)
        setLoading(false)
        if (token) {
            setTimeout(() => {
                
                navigate("/Menu")
            }, 2000);
            setNotif( "login success"
            )
        }}
        )
        .catch((err)=> {console.log(err.response);
        setLoading(false)

            setNotif(err?.response?.data?.message)
        });
    }


    return(
        <div className="login">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>back</button>
      <h1>login</h1>
      {!!notif.length && <h1>{notif}</h1>}
   
<form>
    <div className="form-floating mb-3">
        <input className="form-control" type="text" placeholder ="Username" id="floatingInput" onChange={handleUsernameChange} />
        <label to="floatingInput">Email address</label>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
        <div className="form-floating">
        <input  className="form-control" id="floatingPassword" type="password" placeholder="Password" onChange={handlePasswordChange}/>
        <label to="floatingPassword">Password</label>
        <div id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </div>
        </div>
        <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" to="exampleCheck1">Check me out</label>
  </div>
      <button className="btn btn-warning" disabled={loading ? true : false} onClick={handleLogin} >{loading ? "Loading..." : "Login"}</button>
</form>
      
        </div>
    )
}
export default login;