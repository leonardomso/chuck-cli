const yargs = require('yargs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const fetch = require('node-fetch');

const req = require('./src/requests.js');

const argv = yargs.argv;
const command = process.argv[2];

module.exports = () => {
    console.log(
        chalk.green(
            figlet.textSync('chuck jokes\n', { horizontalLayout: 'full' })
        )
    );

    const categories = [
        'explicit',
        'dev',
        'movie',
        'food',
        'celebrity',
        'science',
        'sport',
        'political',
        'religion',
        'animal',
        'history',
        'music',
        'travel',
        'career',
        'money',
        'fashion'
    ];

    switch (command) {
        case 'joke':
            req.requestJoke();
            break;
        case 'categories':
            req.requestCategories();
            break;
        default:
            const pickedCategorie = categories.map(categorie => {
                if (categorie === command) {
                    req.requestSpecificCategorie(categorie);
                }
            });
    }
};
