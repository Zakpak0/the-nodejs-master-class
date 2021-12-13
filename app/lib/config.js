/*
 *Create and export configuration variables
 *
 *
 */

//Container for all the enviorments
let enviorments = {};

//Staging (default enviorment)
enviorments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC3fc68bdb6c006a92ff3c5c9b34a1cc87",
    authToken: "3f013be3af380d64c92a4d7db1e74548",
    fromPhone: "+15125159591",
  },
  templateGlobals: {
    appName: "UptimeCheck",
    companyName: "NotARealCompaony, Inc",
    yearCreated: "2018",
    baseUrl: "http://localhost:3000/",
  },
};

//Testing enviorment
enviorments.testing = {
  httpPort: 4000,
  httpsPort: 4001,
  envName: "testing",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC3fc68bdb6c006a92ff3c5c9b34a1cc87",
    authToken: "3f013be3af380d64c92a4d7db1e74548",
    fromPhone: "+15125159591",
  },
  templateGlobals: {
    appName: "UptimeCheck",
    companyName: "NotARealCompaony, Inc",
    yearCreated: "2018",
    baseUrl: "http://localhost:4000/",
  },
};

//Production enviorment
enviorments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC3fc68bdb6c006a92ff3c5c9b34a1cc87",
    authToken: "3f013be3af380d64c92a4d7db1e74548",
    fromPhone: "+15125159591",
  },
  templateGlobals: {
    appName: "UptimeCheck",
    companyName: "NotARealCompaony, Inc",
    yearCreated: "2018",
    baseUrl: "http://localhost:5000/",
  },
};

//Determine which enviorment was passed as a command-line agrument

const currentEnviroment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

//Check that the current enviorment is one of the enviorments above,
//if not, default to staging

const envriomentToExport =
  typeof enviorments[currentEnviroment] == "object"
    ? enviorments[currentEnviroment]
    : enviorments.staging;

//Export the module
module.exports = envriomentToExport;
