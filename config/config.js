/* eslint-disable no-undef */
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const certificateFilePath = path.resolve(
  __dirname,
  "./DigiCertGlobalRootCA.crt.pem",
);
const certificateContents = fs.readFileSync(certificateFilePath, "utf8");
module.exports = {
  development: {
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: "mysql",
  },
  production: {
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        ca: certificateContents,
      },
    },
  },
};
