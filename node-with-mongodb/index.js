const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbpractice:T0B3MXn21ILmgK9q@firstproject.54q3p1k.mongodb.net/";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("dbPractice");
        const userCollection = db.collection("user");

        // Endpoint to add a new user
        app.post('/user', async (req, res) => {
            try {
                const newUser = req.body;
                console.log('Adding new user:', newUser);
                const result = await userCollection.insertOne(newUser);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Endpoint to fetch all users (for example)
        app.get('/users', async (req, res) => {
            try {
                const users = await userCollection.find().toArray();
                res.json(users);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);

        })





        // Endpoint to delete a user by ID
        // Endpoint to delete a user by ID
        app.delete('/user/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: ObjectId(id) };
                const result = await userCollection.deleteOne(query);

                if (result.deletedCount === 1) {
                    res.json({ message: 'User deleted successfully' });
                } else {
                    res.status(404).json({ error: 'User not found' });
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });








    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

connectToDB();

// Endpoint for the root
app.get('/', (req, res) => {
    res.send("Server Running");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
