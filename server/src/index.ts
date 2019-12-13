import * as express from 'express';
import { AddressInfo } from 'net';
import * as bodyParser from 'body-parser';

const app = express();
const db = require('../database/database.js');

app.use(bodyParser.json());

app.get('/get-key-values', (req, res) => {
  const sql = 'SELECT * FROM keyValue';
  db.all(sql, [], (err: object[], result: object[]) => {
    if(err) {
      res.json({'message': 'Error'})
    } else {
      res.json(result)
    }
  })
});

app.get('/delete-key-values', (req, res) => {
  const sql = 'DELETE FROM keyValue';
  db.run(sql, [], (err: object[], result: object[])=> {
    if(err) {
      res.json({'message': 'Table was not deleted'})
    } else {
      res.json({'message': 'All data deleted successfully!'})
    }
  })
})

app.post('/store-key-values', (req, res) => {
  const { key, value } = req.body;
  const sql = 'INSERT INTO keyValue (key, value) VALUES (?,?)'
  const values = [key, value];
  db.run(sql, values, (err: object[], result: object) => {
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
