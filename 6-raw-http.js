const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=74355e18ce841ff8d75e8955d212cc9c&query=45,-75&units=f';

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunck) => {
console.log(chunck)

data = chunck.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    });
});

request.on('error', (error) => {
    console.log('An error', error)
})

request.end();