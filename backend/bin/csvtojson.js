const csvFilePath = "./JXA0004269K14.csv";
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log(jsonObj);
  });
