const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})



const askName = () => {
    return new Promise((resolve, reject) => {
        readline.question(`Enter Name of client. `, name => {
            resolve(name.replaceAll(/\x7F/g, ''))
        })
    });
}


exports.getNames = async () => {
    let done = false
    let counter
    const names = []
    while (!done) {
        if (counter == 24) {
            readline.close()
            break
        }
        const name = await askName()
        if (name == "") {
            readline.close()
            break
        } else {
            names.push(name)
        }
        counter++
    }
    return names
}





