import { useState } from "react";
import "../style.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notif, setNotif] = useState("");

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

        axios.post("https://api.mudoapi.tech/login", payload)
        .then((res) => { 
        const token = res?.data?.data?.token;
        if (token) {
            setTimeout(() => {
                
                navigate("/Menu")
            }, 2000);
            setNotif( "login success"
            )
        }}
        )
        .catch((err)=> console.log(err));
    }


    return(
        <div className="login">
      <h1>login</h1>
      {!!notif.length && <h1>{notif}</h1>}
   

        <input type="text" placeholder="Username" onChange={handleUsernameChange} />

        <input type="password" placeholder="Password" onChange={handlePasswordChange}/>

   
      <button onClick={handleLogin}>Submit</button>
      
        </div>
    )
}
export default login;