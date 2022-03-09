const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})



exports.askDate = () => {
    return new Promise((resolve, reject) => {
        readline.question(`Enter date sent `, date => {
            resolve(date.replaceAll(/\x7F/g, ''))
        })
    });
}