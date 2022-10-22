const { Pool } = require('pg');

const PG_URI = 'postgres://ysgvamxt:Nqr0tSkerHtZKmqJmqCuEwr4m4B3gsI6@peanut.db.elephantsql.com/ysgvamxt';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
