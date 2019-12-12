import * as express from 'express';
import { AddressInfo } from 'net';

const app = express();

app.get('/store', () => {
  // Get key and value from query parameters here
});

const server = app.listen(3000, () => {
  const addressInfo = server.address() as AddressInfo; 
  console.log(`Server connected at ${addressInfo.address}:${addressInfo.port}`)
});
