const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
      console.log('Connected to SQLite database.')
      db.run(`CREATE TABLE keyValue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key text UNIQUE,
        value text UNIQUE
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