import logo from '../../images/logo.png'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './login.css'
import axios from 'axios'
import { Link } from "react-router-dom";

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
}
const Login = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllentry] = useState([])



    const signup = () =>{
      navigate('/signup')
     
    }

    const ChangePassword = () => {
      navigate('/ChangePass')
    }


    const login = async (e) =>{
        e.preventDefault()
        let pw = await hash(password)
        const newEntry = {role: 'admin',email: email, password:pw}
        // setAllentry([...allEntry, newEntry])
        // console.log(allEntry)
        // console.log("hello")
        // console.log(newEntry)
        try{
          await axios.post('http://localhost:8000/login', newEntry, {withCredentials: true});
          navigate('/announce')
        }
        catch (err) {
            console.log("ERROR")
        }
        // const s = await axios.post('http://localhost:8000/login', newEntry).then(navigate('/announce')).catch(err=>console.log("Error"))
        
    }
  return (
    <div className="login">
      {/* <img className='logo' src={logo} /> */}
      <div className='area'>
        <p className='loginmsg'>CONTINUE YOUR JOURNEY</p>
        <h1 className='logintitle'>Sign In</h1>
        <form action='' onSubmit={login}>
          <label>
            <input name='email' id='email' type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='logininput1'/>
          </label>
          <label>
            <input name='password' id='password' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='logininput2'/>
          </label>
        </form>
        <button onClick={login} className='loginbuttons' type='submit'>Sign In</button>
        <p className='loginbottom1'onClick={ChangePassword}>Change Your Password? Reset Here</p>
        <p className='loginbottom2'onClick={signup}>Don't have an account? 
          <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;