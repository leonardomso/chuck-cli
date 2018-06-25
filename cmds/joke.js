const chalk = require("chalk");

async function requestJoke() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url, {});
    const result = await fetch(url);
    const data = await result.json();
    return console.log(chalk.white.bgGreen.bold(data.value));
}

module.exports = () => {
    requestJoke;
};
