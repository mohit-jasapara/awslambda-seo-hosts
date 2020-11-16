'use strict';

const { getSeoData, listHosts } = require("./getSeoHost");

module.exports.create = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.list = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        hosts: listHosts(),
      }
    ),
  };

};

module.exports.find = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        host: getSeoData(event.pathParameters ? event.pathParameters.host : ""),
      }
    ),
  };

};
