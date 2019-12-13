import * as express from 'express';
import { AddressInfo } from 'net';
import * as bodyParser from 'body-parser';

const app = express();
const db = require('../database/database.js');

app.use(bodyParser.json());

app.post(`/store-key-values`, function(req, res) {
  const { key, value } = req.body;
  const sql = 'INSERT INTO keyValue (key, value) VALUES (?,?)'
  const values = [key, value];
  db.run(sql, values, function (err: object[], result: object) {
      if (err) {
        res.json({"message": 'That value already exists in the database'})
        return;
      } else {
        res.json({
          "message": `Successfully created a key-value pair of ${key}: ${value}`
        });
      }
  }) 
});

const server = app.listen(3000, () => {
  const addressInfo = server.address() as AddressInfo; 
  console.log(`Server connected at ${addressInfo.address}:${addressInfo.port}`)
});
