import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [roleId,setRoleId] = useState(0);
    const [notif,setNotif] = useState("");

        const navigate = useNavigate();
        
        const handleUsernameRegister = (e) => {
            setUsername(e.target.value);
        }
        const handlePasswordRegister = (e) => {
            setPassword(e.target.value);
        }
        const handleRoleIdRegister = (e) => {
            setRoleId(e.target.value);
        }

        const handleRegister = () => {
        
            const payload = {
                username: username,
                password: password,
                roleId:roleId,

            }
                axios
                .post("https://api.mudoapi.tech/register", payload)
                .then((res) => {
                    const data = res.data?.data;
                    console.log(data);
                    if(data) {
                        setTimeout(() => {
                            navigate("/Login")
                        },2000);
                        setNotif("register is success");
                    }
                })
                .catch((err) => {
                    console.log(err.messageTitle)
                    console.log(err.message)
                })
        }


  return (
    <div>
        <h1>Register</h1>
        {!!notif.length &&<h1>{notif}</h1>}
        <form action="">
            <input type="text" onChange={handleUsernameRegister} placeholder="username"/>
            <input type="password" onChange={handlePasswordRegister} placeholder="input password"/>
            <input type="password" onChange={handleRoleIdRegister} placeholder="input Id"/>
            <button onClick={handleRegister}>Submit</button>
        </form>
    </div>
  )
}

export default Register;