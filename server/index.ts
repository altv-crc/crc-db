import * as alt from 'alt-server';
import * as crc from '@stuyk/cross-resource-cache';

const databaseName = process.env.DB_NAME ?? 'altv';
const connectionString = process.env.DB_NAME ?? 'mongodb://localhost:27017';

crc.database.connect(connectionString, databaseName);
crc.database.onReady(() => {
    alt.log(`~c~[CRC] Initialized Database Successfully!`);
});
