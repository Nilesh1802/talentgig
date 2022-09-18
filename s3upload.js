require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

aws_access_key_id = 'AKIAYA36YO7YLOE4EYHR'
aws_secret_access_key = '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'
aws_bucket_name = 'newcloudprojecttalengig'
aws_bucket_region = "us-east-1"

const bucketName = aws_bucket_name;
const region = aws_bucket_region;
const accessKeyId = aws_access_key_id;
const secretAccessKey = aws_secret_access_key;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,});

    // UPLOAD FILE TO S3

global.u = "";

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
    };
    //return s3.upload(uploadParams).promise(); // this will upload file to S3
    s3.upload(uploadParams, function (s3Err, data) {
        if (s3Err) throw s3Err;
        global.u = `${data.Location}`.toString();
        //console.log(u);
        return global.u;
      });
      //return global.u;
}

module.exports = { uploadFile };
