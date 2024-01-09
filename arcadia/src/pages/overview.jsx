import { useRouteError } from "react-router-dom";
import { redirect } from "react-router-dom";

import { useState } from 'react';


export default function Overview() {

    let html = null;

    const [symbol, setSymbol] = useState('');
    const [token, setToken] = useState('');

    if(!localStorage.getItem('symbol') || !localStorage.getItem('token')){
        console.log('redirect');
        return redirect('/');
    } else {

    setSymbol(localStorage.getItem('symbol'))
    setToken(localStorage.getItem('token'));

    const display = async () => {
        let url = 'https://api.spacetraders.io/v2/';
        await fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    html =
    <div id="error-page">
      <h1>Overview</h1>
      <h2>{symbol}</h2>
      <h2>{token}</h2>
    </div>;

    return html;
    }
}