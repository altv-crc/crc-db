import * as alt from 'alt-server';
import * as crc from '@stuyk/cross-resource-cache';

const username = encodeURIComponent('username');
const password = encodeURIComponent('password'); // Passwords should never be hardcoded! Use Environment instead
const databaseName = 'altv';
const databaseServer = 'localhost:27017';

let connectionString = "";

if (username !== "" && password !== "") {
    connectionString = `${username}:${password}@${databaseServer}`
}
crc.database.connect(`mongodb://${connectionString === "" ? databaseServer : connectionString}`, databaseName);

crc.database.onReady(() => {
    alt.log(`~c~[CRC] Initialized Database Successfully!`);
});