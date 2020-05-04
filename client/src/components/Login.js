import React, {useState} from "react";
import axiosWithAuth, {setToken} from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialCreds = {
    username: '',
    password: ''
  }

  const [creds, setCreds] = useState(initialCreds);

  const handleChange = e => {
    setCreds({...creds,[e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('http://localhost:5000/api/login',creds)
    .then(res => {
      setToken(res.data.payload)
      setCreds(initialCreds)
      props.history.push('/bubbles')
    })
    .catch(err => {
      console.log(err)
    });
  };
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit = {handleSubmit}>

        <input type = 'text' name = 'username' value ={creds.username} placeholder = 'Username' onChange = {handleChange} />
        <input type = 'text' name = 'password' value ={creds.password} placeholder = 'Password' onChange = {handleChange} />

        <button type = 'submit'>Login</button>

      </form>
    </>
  );
};

export default Login;
