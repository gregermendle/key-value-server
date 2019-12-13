const sqlite3 = require('sqlite3');

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
      console.log('Connected to SQLite database.')
      //program runs locally, want user to run npm start and create the db itself instead of having the user set up the table themselves
      db.run(`CREATE TABLE IF NOT EXISTS keyValue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT,
        value TEXT,
        UNIQUE(id, key, value)
        )`, 
      (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('table created!')
        }
      });
  }
});

module.exports = db;