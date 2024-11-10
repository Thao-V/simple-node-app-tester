const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, world! CORS is enabled.');
});
const users = [
  {email: "test@google.com", name: "Tester"}
]
app.post('/users/login', (req, res) => {
  const {email} = req.body;
  const found = users.find(x => x.email === email);
  if(found){
    res.send({token: "fake token", email})
  }
  else{
    res.status(401).send('Wrong email');
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
