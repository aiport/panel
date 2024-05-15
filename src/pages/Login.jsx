import React,{useState} from 'react'
import '../assets/css/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  async function submit(e){
    document.getElementById('login').classList.add('disabled')
    try{
      await fetch('http://localhost:1000/user', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer authcode$1',
        'username': username,
        'password': password,
      }
    }
    ).then(res => res.json()).then(data => {
      if(data.success){
        document.cookie = `token=${data.loginToken}`
        navigate('/')
      }else{
        document.getElementById('error').innerHTML = data.error
        document.getElementById('login').classList.remove('disabled')
      }
    });
    }catch(e){
      document.getElementById('error').innerHTML = e
      document.getElementById('error').style.display = 'block'
      document.getElementById('login').classList.remove('disabled')
    }
}
  return (
   <>
   <div className="loginBody">
   <div className='loginBox'>
      <div className="error" id='error'>
      </div>
            <div className="logo">
              <div className="img"></div>
            <h1>aiport</h1>
            </div>
            <div className="input-box">
                <input type="text" id='username' onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" name="username" required/>
            </div>
            <div className="input-box">
                <input type="password" id='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" required/>
            </div>
            <button type="submit" id='login'onClick={submit}>
            <div className="loader"></div>
              <div className="text" >Login</div>
            </button>

    </div>
   </div>
    </>
  )
}

export default Login