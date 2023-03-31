// Import dependecies
// const fs = require("fs");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");

// Read the file into memory
const workbook = XLSX.readFile("file-example.xlsx");


// Convert the xlsx to json
let worksheets = {};
for (const sheetName of workbook.SheetNames){    
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}


function ShowExcelData(){
    // Show the data as JSON
    console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n");
}

function InsertData(){
    // Modify the XLSX
    worksheets.Sheet1.push({
        "First Name": "Bob",
        "Last Name": "Bob",
        "Gender": "Male",
        "Country": "Thailand",
        "Age": 18,
        "Date": "22/09/2022",
        "ID": 16001
    });

    XLSX.utils.sheet_add_json(workbook.Sheets["Sheet1"], worksheets.Sheet1);
    XLSX.writeFile(workbook, "file-example.xlsx");
}

// Export the function to public
module.exports.ShowExcelData = ShowExcelData;
module.exports.InsertData = InsertData;
