

const fs = require('fs').promises; 
const EventEmitter = require('events');
const emitter = new EventEmitter();

const DB_file = 'counts.json';
let eventsCounter = {}; 


const init = async () => {
    try {
        const rawData = await fs.readFile(DB_file, 'utf-8'); //
        eventsCounter = JSON.parse(rawData);
    } catch (error) {
       
        eventsCounter = {
            'user-login': 0,
            'user_purchase': 0,
            'profile_update': 0,
            'user_logout': 0,
        };
    }
};

// 2. Data save karne ka function
const saveDisk = async () => {
    try {
        await fs.writeFile(DB_file, JSON.stringify(eventsCounter, null, 2), 'utf-8'); //
        console.log('Data saved to disk!');
    } catch (error) {
        console.error("Save error:", error);
    }
};


const start = async () => {
    await init(); 

    //------------------------------------------------------


    emitter.on("user_login",async (user) => {
        console.log(`${user} logged in ..!`)
        eventsCounter['user-login']++
       await saveDisk()

    })
    //------------------------------------------------------

    emitter.on("user_purchase",async (user, item) => {
        console.log(`${user} pershace ${item} ..!`)
        eventsCounter['user_purchase']++
        await saveDisk()


    })
    //------------------------------------------------------

    emitter.on("Profile_update",async (user, email) => {
        console.log(`user name is ${user} and his email ${email} ..!`)
        eventsCounter['profile_update']++
        await saveDisk()


    })
    //------------------------------------------------------
    emitter.on("user_logout", async(user) => {
        console.log(`logged out ${user} ..!`)
        eventsCounter['user_logout']++
        await saveDisk()


    })
    //------------------------------------------------------
    emitter.on('Summary', () => {
        console.log(eventsCounter)
    })

    // Events trigger karein
    emitter.emit("user_login", "hammad")
    emitter.emit("user_purchase", "hammad", 'laptop')
    emitter.emit("Profile_update", "hammad", 'Hammad2930029@gmail.com')
    emitter.emit("user_logout", "hammad")
    emitter.emit('Summary')
};

start();
