/*
* Api Tests
*
*/

// Dependencies
const app = require('./../index')
const assert = require("assert")
const http = require("http")
const config = require("./../lib/config")

// Holder for the test
let api = {}

// Helpers
let helpers = {};
helpers.makeGetRequests = function (path, callback) {
    // Configure the reuqest details
    let requestDetails = {
        'protocol': 'http:',
        'hostname': 'localhost',
        'port': config.httpPort,
        'method': "GET",
        "path": path,
        'headers': {
            'Content-Type': 'application/json'
        }
    };
    // Send the request
    let req = http.request(requestDetails, function (res) {
        callback(res);
    })
    req.end();
}

// The main init() function should be able top run without throwing
api['api.init sould start without throwing'] = function (done) {
    assert.doesNotThrow(function (err) {
        app.init(function (err) {
            done();
        })
    }, TypeError)
};

// Make a request to /ping
api['/ping shoudl respond to get with 200'] = function (done) {
    helpers.makeGetRequests('/ping', function (res) {
        assert.equal(res.statusCode, 200);
        done();
    })
}

// Make a request to /api/users
api['/api/users shoudl respond to get with 400'] = function (done) {
    helpers.makeGetRequests('/api/users', function (res) {
        assert.equal(res.statusCode, 400);
        done();
    })
}
// Make a request to a random path
api['A random path should respond to get with 404'] = function (done) {
    helpers.makeGetRequests('/this/path/shouldnt/exist', function (res) {
        assert.equal(res.statusCode, 404);
        done();
    })
}




// Export the tests to the runner
module.exports = api