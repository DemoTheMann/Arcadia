import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    let html = null;

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
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>;

    return html;
}