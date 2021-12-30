import React from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = React.useState({name:"",email:'', password:''});
    const submit = () => {
            axios.post("http://localhost:4000/api/users/register", user).then((res) => {
                console.log(res.data);
                navigate("/");
            })
    }
    return (
        <div className='form-container'>
            <h3 className='form-heading'>Register</h3>

            name: <input type="text" value={user.name} onChange={(e) => {
                setUser({ ...user, name: e.target.value });
            }} />
            <hr />
            email: <input type="text" value={user.email} onChange={(e) => {
                setUser({ ...user, email: e.target.value });
            }} />
            <hr />

            password: <input type="text" value={user.password} onChange={(e) => {
                setUser({ ...user, password: e.target.value });
            }} />
            <hr />
        

            <button onClick={submit} className='delbtn'>Sign-Up</button>
        </div>
    )
}
