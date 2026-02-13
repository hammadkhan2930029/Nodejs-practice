
// const fs = require('fs')
// const path = require('path')
// const fileName = 'fsAsync.jsx'
// const filePath = path.join(__dirname, fileName)
// //----------------write file async-----------------

// fs.writeFile(
//     filePath,
//     'This is my initial data 2', 'utf-8',
//     (error) => {
//         if (error) {

//             console.error(error)
//             return;
//         }
//         console.log('File successfully written');


//     }
// )


// //----------------Read file async-----------------
// fs.readFile(filePath, 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error)
//         return;
//     }
//     console.log(data)
// })

// //----------------Append file async-----------------

// fs.appendFile(filePath,'\n My profession is web development',(error)=>{
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log('Append Data ..!')
// })

// //----------------delete file async-----------------

// fs.unlink(filePath,(error)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("Deleted")
// })


