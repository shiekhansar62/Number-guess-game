import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(systemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Writr your guess b/w 1 to 10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.timeLog("yaaaa your answer is correct  \n you win!");
}
else {
    console.log("please try again better luck next time!");
}
