const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const birds = require('./birds')
// app.use('/birds', birds)

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbpractice:T0B3MXn21ILmgK9q@firstproject.54q3p1k.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: { 
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        // await client.db("admin").command({ ping: 1 });
        const userCollection = client.db("dbPractice").collection("user");
        const user = { name: 'mishuk', email: 'mishuk@gmail.com' };
        const result = await userCollection.insertOne(user);
        console.log(`User insert with:${result.insertedId}`);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/package.json')


app.get('/', (req, res) => {
    res.send("Server Running");
})

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })


app.listen(port, () => {
    console.log("Server is running....")
})



