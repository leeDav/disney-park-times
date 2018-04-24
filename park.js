'use strict';

const Themeparks = require("themeparks");

module.exports.magicKingdom = async(event, context, callback) => {
    const rides = await disneyMagicKingdom.GetWaitTimes();

    rides.map(ride => {
        if (ride.active) {
            console.log(ride.name + ": " + ride.waitTime + " minutes wait");
        }
    });

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
