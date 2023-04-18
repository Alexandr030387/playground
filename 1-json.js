const fs = require('fs');
const { json } = require('stream/consumers');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(data.name)

data.name = 'Alex';
data.age = 35;

const newData = JSON.stringify(data);
fs.writeFileSync('1-json.json', newData)