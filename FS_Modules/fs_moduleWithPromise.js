


// 1. fs/promises Module (Node.js)
// Fawaid (Advantages):

// Is mein manual callbacks ki zaroorat nahi hoti.

// async/await istemal karte hue zyada saaf aur samajh mein aane wala asynchronous kaam hota hai.

// Ye modern JavaScript applications ke liye behtareen hai.

// Kab istemal karein (Use Cases):

// Non-blocking tareeqe se files read karne ke liye.

// Event loop ko block kiye baghair data likhne (write) ya add (append) karne ke liye.

// Promise chaining ke zariye ek saath ya ek ke baad ek kai file operations karne ke liye.

// .catch() ya try...catch blocks ke saath errors ko achi tarah handle karne ke liye.

// const { error } = require('console')
// const fs = require('fs')
// const path = require('path')
// const fileName = 'fsPromisses.jsx'
// const filePath = path.join(__dirname, fileName)

// --------------------write file promises------------------

// fs.promises.writeFile(filePath, 'This is FS with promises','utf-8')
//     .then(console.log('file Create successfully!'))
//     .catch((error) => console.log(error))

// --------------read file-----------------------------
// fs.promises
// .readFile(filePath, 'utf-8')
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))

// -------------append---------------------

// fs.promises
//     .appendFile(filePath, '\nI am nodeJs developer', 'utf-8')
//     .then(console.log('Append file successfully!'))
//     .catch((error) => console.log(error))

// ------------------Delete--------------------------------

// fs.promises
//     .unlink(filePath)
//     .then(console.log('deleted'))
//     .catch(error => console.log(error))