const sqlite3 = require('sqlite3');

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
      console.log('Connected to SQLite database.')
      db.run(`CREATE TABLE IF NOT EXISTS keyValue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT,
        value TEXT,
        UNIQUE(key, value)
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