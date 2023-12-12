import './../assets/css/login.css';

function Login() {
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
      console.log(error);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let token = e.currentTarget.elements.login__token.value;
    signIn(token).then((result)=>{
      console.log(result['data']['symbol']);
    });

  }
      

  display().then((result)=>{
    let expected = 'SpaceTraders is currently online and available to play'
    console.log(result);
    if(result  !== expected){
      console.log(false);
    } else {
      console.log(true);
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
  </section>
  ;

  return html;
}

export default Login;
