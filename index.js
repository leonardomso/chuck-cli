const yargs = require("yargs");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

const argv = yargs.argv;
const command = process.argv[2];

console.log(
    chalk.green(figlet.textSync("chuck jokes", { horizontalLayout: "full" }))
);

console.log(
    chalk.white.bgGreen.bold("\nDo you wanna hear some Chuck Norris jokes?\n")
);

console.log(chalk.white.bgGreen.bold("\nType ENTER to hear one...\n"));

switch (command) {
    case "add":
        console.log("look alive");
        break;
    case "list":
        notes.getAll();
        break;
    case "read":
        notes.getNote(argv.title);
        break;
    case "remove":
        notes.removeNote(argv.title);
        break;
    default:
        console.log("Command not recognized.");
}
