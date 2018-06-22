const url = "https://api.chucknorris.io/jokes/random";

console.log("Do you wanna hear some Chuck Norris jokes?");
console.log("Type ENTER to hear one...");

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.value);
    })
    .catch(error => {
        console.log(error);
    });
