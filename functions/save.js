'use strict';

const AWS = require('aws-sdk');
const moment = require('moment');

const s3 = new AWS.S3();

var BUCKET_NAME = 'disney-ride-wait-times.atomicstructure.net';

module.exports.data = (park, times) => {
    const FOLDER_NAME = moment().format('YYYY-MM-DD');
    const FILE_NAME = moment().toISOString();
    const FILE_FULL = `${FOLDER_NAME}/${park}/${FILE_NAME}.json`;

    try {
        s3.putObject({
            Bucket: BUCKET_NAME,
            Key: FILE_FULL,
            Body: JSON.stringify(times),
            ContentType: "application/json"
        }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Uploaded ${FILE_FULL} to ${BUCKET_NAME}`);
            }
        });
    } catch(err) {
        console.log(err);
    }
};
