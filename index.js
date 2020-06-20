const fs = require('fs');

module.exports.toCSV = (jsonArray, separator, path) => {
    var attributes = [];
    var textFile = ''
    for (att in jsonArray[0]) {
        attributes.push(att);
        textFile += att;
        textFile += separator;
    }
    textFile = textFile.substring(0, textFile.length - 1);
    textFile += '\n';
    jsonArray.forEach(element => {
        for (let key in element) {
            textFile += element[key];
            textFile += separator;
        }
        textFile = textFile.substring(0, textFile.length - 1);
        textFile += '\n';
    });
    try {
        fs.writeFileSync(path, textFile);
    } catch (err) {
        console.error(err);
    }

}