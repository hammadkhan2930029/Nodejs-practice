// import readline from 'readline'


// const green = '\x1b[32m'
// const yellow = '\x1b[33m'
// const blue = '\x1b[34m'
// const red = '\x1b[31m'
// const reset = '\x1b[0m'


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const todos = []
// const showMenu = () => {
//     console.log(blue + '\n 1:Add a task' + reset)
//     console.log(blue + '\n 2:View task' + reset)
//     console.log(red + '\n 3:Exit' + reset)
//     rl.question(yellow + "Coose an option :" + reset, handleInput)


// }
// const handleInput = (option) => {
//     if (option === '1') {
//         rl.question(yellow + "Enter the task :" + reset, (task) => {
//             todos.push(task)
//             console.log(green + `Task added : ${task}` + reset)
//             showMenu()
//         })
//     } else if (option === '2') {
//         console.log(green + "\n Your Todo list :" + reset)
//         todos.forEach((task, index) => {
//             console.log(green + `${index + 1}.${task}` + reset)
//         })
//         showMenu()
//     } else if (option === '3') {
//         console.log(green + "Good bye!" + reset)
//         rl.close()

//     } else {
//         console.log(red + 'Invalid Option Please Try Again' + reset)
//     }
// }
// showMenu()
import chalk from 'chalk'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const todos = []
const showMenu = () => {
    console.log(chalk.blue('\n1 : Enter task '))
    console.log(chalk.blue('\n2 : View task '))
    console.log(chalk.red('\n3 : Exit '))
    rl.question(chalk.yellow("Choose an Option :"), handleInput)

}
const handleInput = (option) => {
    if (option === '1') {
        rl.question(chalk.green("Enter your task :"), (task) => {
            todos.push(task)
            console.log(chalk.cyan(`Task Added Successfully : ${task}`))
            showMenu()
        })

    } else if (option === '2') {
        console.log(chalk.bgBlue('\nYour Todo List'))
        todos.forEach((task, index) => {
            console.log(chalk.bgCyanBright(`${index + 1} : ${task}`))
            
        })
    } else if (option === '3') {
        console.log(chalk.bgMagenta("Good By ..!"))
        rl.close()
    } else {
        console.log(chalk.bgRed('Invalid Option Please Try Again'))
    }
}
showMenu()