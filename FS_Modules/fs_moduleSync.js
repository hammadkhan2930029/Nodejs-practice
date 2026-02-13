
// const fs = require('fs')
// const path = require('path')
// const filename = "text.jsx"
// const filePath = path.join(__dirname, filename)

// fs.writeFileSync(): file mein data likhta hai.
// Agar file pehle se mojood na ho to wo create ho jati hai.
// Agar file mojood ho to uska purana content overwrite ho jata hai.

// syntax: fs.writeFileSync(filePath, data, options);

// filePath: wo path jahan file likhni hai.

// data: wo content jo file ke andar likhna hai.

// options: optional hota hai.
// Is mein encoding (jaise 'utf8'), mode, ya flags shamil ho sakte hain.


// ----------------write data sync code example------------------------------

// const writeFile = fs.writeFileSync(filePath, 'const phone = 03172930029', 'utf-8')
// console.log(writeFile)

// =====================================================================================

// fs.readFileSync() ki Tafseel
// Maqsad: Ye function kisi file ka content read karta hai aur usey string ya Buffer ke taur par wapas (return) karta hai.

// Syntax: const data = fs.readFileSync(filePath, options);

// Parameters:

// filePath: Us file ka rasta (path) jo aap read karna chahte hain.

// options: Ye optional hai. Is mein encoding (jaise 'utf8') di jati hai taake data string ki shakal mein mil sake.

// ----------------read data sync code example------------------------------

// const readfile = fs.readFileSync(filePath,'utf-8')
// console.log("Read file : ", readfile)

// .toString() ka istemal
// Agar aap binary data (Buffer) par kaam kar rahe hain to .toString() istemal karein.

// Misaal ke taur par, agar aapko raw binary data aur uski string representation (shakal) dono ki zaroorat ho.

// ------------------append file data---------------------------------

// fs.appendFileSync() ki Tafseel
// Maqsad: Ye function kisi file ke aakhir mein naya data add (append) karne ke liye istemal hota hai. Agar wo file pehle se maujood na ho, to ye function nayi file bana deta hai.
// Syntax: fs.appendFileSync(filePath, data, options);
// Parameters:
// filePath: Us file ka path jisme data add karna hai.
// data: Wo content ya maloomat jo aap file mein likhna chahte hain.
// options: Ye optional hai, isme aap encoding (jaise 'utf8') set kar sakte hain.
// ---------------------append code example-----------------------------------------
// const appendFile = fs.appendFileSync(filePath,'const telephone : 03183622312','utf-8')
// console.log(appendFile)

// ----------------delete file synce------------------------------------------------

// fs.unlinkSync() - File Delete Karna
// Maqsad: Ye function kisi file ko uske path ke zariye delete karne ke liye istemal hota hai.

// Syntax: fs.unlinkSync(filePath);

// filePath: Us file ka rasta (path) jise aap delete karna chahte hain.

// const deletefile = fs.unlinkSync(filePath)
// console.log(deletefile)