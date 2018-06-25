const chalk = require('chalk');
const fetch = require('node-fetch');

const requestJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    const data = await response.json();
    return console.log(chalk.white.bgGreen.bold(data.value));
};

const requestCategories = async () => {
    const url = 'https://api.chucknorris.io/jokes/categories';
    const response = await fetch(url);
    const data = await response.json();
    for (const item of data) {
        console.log(chalk.white.bgGreen.bold(item));
    }
};

const requestSpecificCategorie = async categorie => {
    const url = `https://api.chucknorris.io/jokes/random?category=${categorie}`;
    const response = await fetch(url);
    const data = await response.json();
    return console.log(chalk.white.bgGreen.bold(data.value));
};

const sum = (a, b) => {
    return a + b;
};

module.exports = {
    requestJoke,
    requestCategories,
    requestSpecificCategorie,
    sum,
};
