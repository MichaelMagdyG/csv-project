const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJSON().fromFile('./orders.csv').then(source => {
    console.log(source);
    source.push({
        "serviceNumber": "56789",
        "imsi": "hi",
        "iccid": "Dell",
        "lockCode": "00:00"
    });
    const csv = JSONToCSV(source, { fields: ["serviceNumber", "imsi", "iccid", "lockCode"] });
    FileSystem.writeFileSync('./new.csv', csv);
});