const mysql = require('mysql');

// adatbázishoz kapcsolódás
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clothes'
});

connection.connect((err) => {
    if (err) {
        console.log(`Error connecting to the database: ${err}`);
        return;
    }

    console.log('The server is running!');
});

module.exports = connection;