const os = require('os')

// get the OS platform & userinfo

console.log('platform :',os.platform())
console.log('userinfo :',os.userInfo())

//get the OS CPU architechture

console.log('CPU Architecture :',os.arch())

//Get free memory

console.log('free memory :',os.freemem(),'bytes')

// Get total system memory

console.log('total system memory :',os.totalmem(),'bytes')

// Get system uptime

console.log('system uptime :',os.uptime(),'bytes')

// Get home directory 

console.log('home directory  :',os.homedir())

// get host name 

console.log('host name  :',os.hostname())

// Get network interface

console.log('Network interface  :',os.networkInterfaces())

// Get CPU information

console.log('CPU information  :',os.cpus())

// Get temporary directory 

console.log('Temporary directory  :',os.tmpdir())

//Get Operating system name

console.log('Temporary directory  :',os.type())






