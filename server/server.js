const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'bandomasis',
    password: 'bandomasis',
    database: 'kolt_scooters'
})

con.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Prisijungta!!');
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})