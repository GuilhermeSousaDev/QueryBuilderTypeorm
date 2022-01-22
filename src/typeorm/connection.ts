import { createConnection } from 'typeorm';

createConnection()
    .then(() => console.log("Conectado ao banco"))
    .catch(e => console.log(e))