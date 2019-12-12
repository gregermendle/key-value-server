import * as express from 'express';
import { AddressInfo } from 'net';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

//Change name to be more specific
app.post(`/store`, function(req, res) {
  // Get key and value from query parameters here
  console.log(req.body);
  
  const { key, value } = req.body;
  //connect to database 
  //save to database
  //if successful message = sucessfully created
  //if duplicate message = key already exists
  res.send({ message: 'successfully created' })
});

const server = app.listen(3000, () => {
  const addressInfo = server.address() as AddressInfo; 
  console.log(`Server connected at ${addressInfo.address}:${addressInfo.port}`)
});
