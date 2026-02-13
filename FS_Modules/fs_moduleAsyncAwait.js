
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

// const fs = require('fs/promises')
// const path = require('path')
// const fileName = 'fsAsyncAwait.jsx'
// const filePath = path.join(__dirname, fileName)

// -------------------------write----------------------------------

// const writefile = async () => {
//     try {
//         await fs.writeFile(filePath, "My Name is khan", 'utf-8')
//         console.log("Files Created successfully !")

//     } catch (error) {
//         console.log(error)
//     }
// }
// writefile()

// -------------------------Read----------------------------------

// const readFile = async () => {
//     try {
//         const res = await fs.readFile(filePath, 'utf-8')
//         console.log(res)

//     } catch (error) {
//         console.error(error)
//     }
// }
// readFile()

// -----------------update---------------------------------------------

// const updateFile = async()=>{
//     try{
//         await fs.appendFile(filePath,'\nconst name = "hammad khan"','utf-8')
//         console.log('Updated successfully !')

//     }catch(error){
//         console.error(error)
//     }
// }
// updateFile()

// ---------------------------delete-------------------------------------
// const deleteFile = async()=>{
//     try{
//         await fs.unlink(filePath)
//         console.log('Delete Successfully..!')

//     }catch(error){
//         console.error(error)
//     }
// }
// deleteFile()
