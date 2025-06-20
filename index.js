require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bejl412.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const database = client.db("foodDB");
        const foodCollection = database.collection("foods");

        //creat a new food item
        app.post('/add-food', async (req, res) => {
            const food = req.body;
            const result = await foodCollection.insertOne(food);
            res.send(result);
        });

        //get all food items
        app.get('/foods', async (req, res) => {
            const foods = await foodCollection.find().toArray();
            res.send(foods);
            // console.log(foods);
        });

        //get only available food items
        app.get('/available-foods', async (req, res) => {
            const availableFoods = await foodCollection.find({ status: "available" }).toArray();
            res.send(availableFoods);
        });

        // Send a ping to confirm a successful connection
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);













app.get('/', (req, res) => {
    res.send('Foodie Server is running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
