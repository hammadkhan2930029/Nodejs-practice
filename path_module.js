const path = require('path')



const filePath = path.join('folder', 'School', 'class', 'student')


const parsData = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extentionName = path.extname(filePath)
const basename = path.basename(filePath)
const diroctoryname = path.dirname(filePath)


console.log({ parsData, resolvedPath, extentionName, basename, diroctoryname,pathseparator:path.sep })


