const { Pool } = require("pg");
const client = new Pool({
  host: "localhost",
  port: 5432,
  database: "Week 9",
  user: "postgres",
  password: "Incorrecto1!",
});

module.exports = client;