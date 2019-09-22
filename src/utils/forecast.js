const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cb12f0ddce4f49afb55b186d57026aa7/' + latitude + ',' + longitude;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined);
        } else if (response.body.error) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
            callback(undefined, {
                Temperature: response.body.currently.temperature
            });
        }
    });
};

module.exports = forecast;