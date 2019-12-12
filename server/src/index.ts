import * as express from 'express';
import { AddressInfo } from 'net';
import * as bodyParser from 'body-parser';

const app = express();
const db = require('../database/database.js');

app.use(bodyParser.json());

//Change name to be more specific
app.post(`/store`, function(req, res) {
  // Get key and value from query parameters here
  console.log(req.body);
  
  const { key, value } = req.body;
  //connect to database
  const sql = 'INSERT INTO keyValue (key, value) VALUES (?,?)'
  const values = [key, value];
  db.run(sql, values, function (err: object[], result: object) {
    console.log(result, err);
    
      if (err) {
        res.status(400).json({"error": err})
        return;
      } else {
        res.json({
          "message": 'success'
        });
      }
  }) 
  //save to database
  //if successful message = sucessfully created
  //if duplicate message = key already exists
});

const server = app.listen(3000, () => {
  const addressInfo = server.address() as AddressInfo; 
  console.log(`Server connected at ${addressInfo.address}:${addressInfo.port}`)
});
