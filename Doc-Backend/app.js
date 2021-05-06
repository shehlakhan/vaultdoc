const express = require('express');
var multer  = require('multer')
var multerUpload = multer({ dest: 'uploads/' })
const aws = require('aws-sdk');
var app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

aws.config.region = 'us-east-2'
aws.config.accessKeyId = '';
aws.config.secretAccessKey= '';


app.post('/upload', multerUpload.single('upload'), function (req, res, next) {
    const fileContent = fs.readFileSync(req.file.path);
    const s3Bucket= new aws.S3()
    var params={
          Bucket: 'docs-skk',
          Key: req.file.originalname,
          Body: fileContent
        }
      
          s3Bucket.putObject(params, function(err, data){
          if (err) { 
            console.log(err);
            console.log('Error uploading data: ', data); 
          } else {
            console.log('successfully uploaded the image!');
          }
      });
console.log('file1 uploaded',req.file);
    res.end('completed Uploading');
});
app.get('/download',function(req,res){
  console.log('Download Method initiated');
  const s3Bucket= new aws.S3()
      var params = {
        Bucket: 'docs-skk',
        Key : 'Certificate2.pdf'
      }
  s3Bucket.getObject(params,function(err,data){
    if(err) console.error(err);
    console.log(data);
    res.writeHead(200, {
         'Content-Type': 'application/pdf',
         'Content-Length': data.Body.length 
       });
    res.end(data.Body);
  }) 
});
app.get('/listObjects', function(req,res){
  console.log('Download Method initiated');
  const s3Bucket= new aws.S3()
      var params = {
        Bucket: 'docs-skk',
      }
      s3Bucket.listObjects(params, function(err, data) {
        if (err) {
          console.log("Error in listobjects", err);
        } else {
          console.log("Success", data.Contents);
          res.json(data);
        
        }
      });
   
})
app.get('/getData/:id',function(req,res){
  const custid = req.params.id;
  pool.query('SELECT * FROM customer1 where custid ="'+custid+'"', (error, result) => {
    if (error) throw error;
    res.send(result);
});
})
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})