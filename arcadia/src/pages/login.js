import './../assets/css/login.css';
import { Link } from "react-router-dom";

export default function Login() {
  const API_URL = 'https://api.spacetraders.io/v2/'

  const display = async () => {
      let url = API_URL;
      let data = null;
      await fetch(url)
      .then(response => response.json())
      .then(response => {
        data = response['status'];
      })
      .catch((error) => {
        console.log(error);
      })
    return data;
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

      }
    });

  }
      

  display().then((result)=>{
    let expected = 'SpaceTraders is currently online and available to play'
    console.log(result);
    if(result  !== expected){
      html = "<h1>SpaceTraders is currently offline</h1>"
    }
    return html;
  });

  let html = 
  <section className='login'>
    <form onSubmit={handleSubmit}>
      <label htmlFor='login__token'>Please input your token</label>
      <input type='text' id='login__token' name='login__token' placeholder='token' required></input>
      <button id='login__submit' type='submit'>Confirm</button>
    </form>
    <Link to='/error'>error</Link>
  </section>
  ;

  return html;
}
