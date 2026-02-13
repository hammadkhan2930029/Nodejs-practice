import readline from 'readline'
import fs from 'fs'
import { error } from 'console'
// import path from 'path'
// const filePath = path.join(__dirname)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

const handleFileCreator = () => {
    rl.question("Enter File Name :", (fileName) => {
        rl.question('Enter the content for your file :', (content) => {
            fs.writeFileSync(`${fileName}.txt`, content, () => {
                if (error) {
                    console.log(`error writing the file ${error.message}`)
                } else {
                    console.log(`File ${fileName}.txt create successfully`)
                }
                rl.close()
            })
        })
    })
}
handleFileCreator()