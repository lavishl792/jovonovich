const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'lokesh2004',
        database: 'NewDb'
    }
})
const { Client } = require('pg');


const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'lokesh2004',
    database: 'NewDb'
  
});


client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL database', err));



client.query('SELECT * FROM orders;', (err, res) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }    
    
    console.log('Orders:');
    console.table(res.rows); 
  });

  client.query('SELECT * FROM users;', (err, res) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }    
    
    console.log('users:');
    console.table(res.rows);
  });

  async function fetchUsernames() {
    try {
      const query = 'SELECT name FROM users';
      const result = await client.query(query);
      const usernames = result.rows.map(row => row.name);
      
      
      if (usernames.includes('lokesh')) {
        console.log('Hello!');
      } else {
        console.log('Username "lokesh" not found.');
      }
    } catch (error) {
      console.error('Error fetching usernames:', error);
    }
  }

  fetchUsernames()


const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"));
})

app.get('/name', (req, res) => {
    res.sendFile(path.join(intialPath, "name.html"));
})



app.post('/register-user', (req, res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})


app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('email or password is incorrect');
        }
    })
})
const { Pool } = require('pg');




app.use(bodyParser.json());


const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'lokesh2004',
    database: 'NewDb'
});



app.post('/purchase', async (req, res) => {
    const { orderName, customerName, totalAmount } = req.body;
    try {
        const client = await pool.connect();
        const query = 'INSERT INTO orders (order_name, customer_name, total_amount) VALUES ($1, $2, $3)';
        const values = [orderName, customerName, totalAmount];
        await client.query(query, values);
        client.release();
        res.sendStatus(200);
    } catch (err) {
        console.error('Error executing query', err);
        res.sendStatus(500);
    }
});
  
app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})
