const csvFilePath = "./test.csv";
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log(jsonObj);
  });
