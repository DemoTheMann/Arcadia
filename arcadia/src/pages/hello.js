export default function Hello() {
    let html = null;

    const display = async () => {
        let url = 'https://api.spacetraders.io/v2/';
        let data = null;
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
    <div>
        <p>Hello</p>
    </div>

    display();
    return html;
}