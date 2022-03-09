const { join } = require('path')
const filePath = join(process.env.CHANNEL, process.env.ROOT_FOLDER, process.envPARENT_FOLDER, process.env.FILE)
const Excel = require('exceljs');


exports.addRows = async (rows) => {
    const wb = new Excel.Workbook();
    const ws = await wb.xlsx.readFile(filePath).then(() => wb.getWorksheet('2022'))
    ws.addRows(rows);
    await wb.xlsx.writeFile(filePath)
    return wb
}