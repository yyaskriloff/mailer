#! /usr/bin/env node

const excel = require('exceljs');
require('dotenv').config()
const fs = require('fs');

const { askDate } = require('./controllers/date')
const { getNames } = require('./controllers/name.js')
// const { addRows } = require('./controllers/rows')
const { seperateNames } = require('./controllers/configure-names.js')

const main = async () => {
    const date = await askDate()
    let names = await getNames()
    const rows = []
    for (let name of names) {
        const client = seperateNames(name)
        // last name || first name || date || mailed to TA || Document Mailed
        rows.push({
            lastName: client.firstName,
            firstName: client.lastName,
            date,
            ta: "No",
            doc: `Documents ${client.years}`
        })
    }
    addRows(rows).then(() => console.log("rows added to file"))
}
main()