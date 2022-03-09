const excel = require('exceljs');
require('dotenv').config()
const fs = require('fs');

const { getNames } = require('./controllers/name.js')
const { addRows } = require('./controllers/rows')

const main = async () => {
    // get date
    //get year
    let names = await getNames()
    names = seperateNames(names)
    const rows = []
    for (let name in names) {
        // last name || first name || date || mailed to TA || Document Mailed
        rows.push({
            lastName: name.last,
            firstName: name.first,
            date: inputDate,
            ta: "No",
            doc: `Documents ${docYears}`
        })
    }
    
}