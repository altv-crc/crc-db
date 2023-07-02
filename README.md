# [TS] MongoDB Cross Resource Database

<sup>Supported by <a href="https://github.com/orgs/altv-crc/">CRC</a></sup>

This is a small resource that pulls in a library for database management that can be used in all resources.

It allows users to easily set and fetch data from any resource.

## Usage

**This resource handles the connection part, so skip that**

[See lib-cross-resource-cache](https://github.com/altv-crc/lib-cross-resource-cache) for further usage.

## Requires

- TypeScript
- https://github.com/Stuyk/altv-typescript
- [alt:V Event Suggestions](https://marketplace.visualstudio.com/items?itemName=stuyk.altv-event-suggestions)
- MongoDB Server
  - Choose one of the following
  - [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  - [Free MongoDB Atlas Server](https://www.mongodb.com/atlas/database)

_Highly recommended to get the extension, for better event handling._

## Installation

Inside of your main folder, you will need to install this library.

```
npm i @stuyk/cross-resource-cache
```

* Create a folder in your `src` folder called `crc-db`.

* Add the `TypeScript` files from this resource, to that folder.

_You can also `git clone` directly into your `src` folder._

## Setup

Modify `server.toml` and ensure it loads whatever you named the folder.

In the case of the example above it should be `crc-db`.

```
resources = [ 
    'mods-before-db',
    'crc-db',
    'resources-after-db',
    'dbg_reconnect'
]
```

## Configuration

You need to modify the `connectionString` in the resource to point towards the right URL.

Open `src/server/index.ts` and modify the `connectionString` variable.

By default it uses localhost.