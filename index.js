const yargs = require("yargs");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

const joke = require("./src/api.js");

const argv = yargs.argv;
const command = process.argv[2];

module.exports = () => {
    console.log(
        chalk.green(
            figlet.textSync("chuck jokes", { horizontalLayout: "full" })
        )
    );

    console.log(
        chalk.white.bgGreen.bold(
            "\nDo you wanna hear some Chuck Norris jokes?\n"
        )
    );

    console.log(chalk.white.bgGreen.bold("\nType ENTER to hear one...\n"));

    switch (command) {
        case "joke":
            joke.requestJoke();
            break;
        default:
            console.log("Command not found.");
    }
};
