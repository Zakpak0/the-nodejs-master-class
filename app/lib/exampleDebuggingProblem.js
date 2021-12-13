/*
*Library that demonstates something throwing when it's init() is called
*
*/

// Containter for module
let example = {}

// Init function
example.init = function () {
    // This is an error created intentionally (bar is not defined)
    let foo = bar
}

// Export the module
module.exports = example