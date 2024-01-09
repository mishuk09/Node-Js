const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(express.json());

app.use(cors());


const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Bret",

    },
    {
        "id": 2,
        "name": "  Pab",
        "email": "Bret",

    },
    {
        "id": 3,
        "name": "  Gab",
        "email": "Bret",

    },
    {
        "id": 4,
        "name": "  Mahadi",
        "email": "Bret",

    },
    {
        "id": 5,
        "name": "  Hasan",
        "email": "Bret",

    },
]


app.post('/user', (req, res) => {
    console.log('request', req.body);

    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


app.get('/users', (req, res) => {
    console.log(req.params);
    res.send("find user");
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/', (req, res) => {
    res.send("Hello Node JAVASCRIPT");
});

app.listen(port, () => {
    console.log('Server is running on port:', port);
});
