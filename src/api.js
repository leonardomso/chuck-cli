const url = "https://api.chucknorris.io/jokes/random";

const requestJoke = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.value);
        })
        .catch(error => {
            console.log(error);
        });
};

module.exports = {
    requestJoke
};
