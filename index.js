const yargs = require("yargs");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const joke = require("./cmds/joke.js");
const fetch = require("node-fetch");

const argv = yargs.argv;
const command = process.argv[2];

module.exports = () => {
    console.log(
        chalk.green(
            figlet.textSync("chuck jokes\n", { horizontalLayout: "full" })
        )
    );

    const requestJoke = async () => {
        const url = "https://api.chucknorris.io/jokes/random";
        let response = await fetch(url);
        let data = await response.json();
        return console.log(chalk.white.bgGreen.bold(data.value));
    };

    switch (command) {
        case "joke":
            requestJoke();
            break;
        case "test":
            console.log("test working fine");
            break;
        default:
            console.log("Command not found.");
    }
};
