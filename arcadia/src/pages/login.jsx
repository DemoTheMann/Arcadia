import './../assets/css/login.css';
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useState } from 'react';

export default function Login() {
  const API_URL = 'https://api.spacetraders.io/v2/'
  let html = '';

  const [errorMsg, setErrorMsg] = useState('');

  const apiStatus = async () => {
      let url = API_URL;
      let expected = 'SpaceTraders is currently online and available to play'

      await fetch(url)
      .then(response => response.json())
      .then(response => {
        if(response['status']  !== expected){
          console.log(response['status']);
          console.log('false');
        } else {
          console.log(response['status']);
          console.log('true');
        }
      })

      .catch((error) => {
        console.log(error);
      })
  }



  const signIn = async (token) => {
    let url = API_URL+'/my/agent';
    let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+ token,
      }
    };

    try{
      let response = await fetch(url, options);
      let data = await response.json();
      return data;

    } catch(error) {
      return error;
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let token = e.currentTarget.elements.login__token.value;
    signIn(token).then((result)=>{
      
      if(!result.error){
        console.log(result['data']);
        localStorage.setItem('symbol', result['data']['symbol']);
        localStorage.setItem('token', token);

      } else {
        setErrorMsg('Wrong Token');
      }
    });

  }

      html = 
        <section className='login'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='login__token'>Please input your token</label>
            <input type='text' id='login__token' name='login__token' placeholder='token' required></input>
            <button id='login__submit' type='submit'>Confirm</button>
          </form>
          <h2 className='errorMsg'>{errorMsg}</h2>
        </section>
      ;
  
  console.log(errorMsg);
  console.log(html);
  return html;
}
