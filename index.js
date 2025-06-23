require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        //get all food items and get added by user
        app.get('/foods', async (req, res) => {
            const email = req.query.email;
            //console.log(`Querying foods for email: ${email}`);

            const query = {};
            if (email) {
                query.donorEmail = email;
            }
            const foods = await foodCollection.find(query).toArray();
            res.send(foods);
            // console.log(foods);
        });

        //update a food item by id
        app.put('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const updatefood = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: updatefood,
            };
            const result = await foodCollection.updateOne(query, updateDoc, options);
            res.send(result);
        });
        //delete a food item by id
        app.delete('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await foodCollection.deleteOne(query);
            res.send(result);
        });

        //get only available food items
        app.get('/available-foods', async (req, res) => {
            const availableFoods = await foodCollection.find({ status: "available" }).toArray();
            res.send(availableFoods);
        });
        //get only 6 available food items
        app.get('/featured-foods', async (req, res) => {

            const featuredFoods = await foodCollection
                .find({ status: "available" })
                .sort({ quantity: -1 }) // বেশি quantity আগে
                .limit(6)
                .toArray();

            res.send(featuredFoods);

        });

        //get one food item by id
        app.get('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const food = await foodCollection.findOne(query);
            res.send(food);
        });
        //modify a food status item by id
        app.patch('/update-status/:id', async (req, res) => {
            const id = req.params.id;
            const status = req.body.status;
            const query = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: status
                },
            };
            const result = await foodCollection.updateOne(query, updateDoc);
            res.send(result);
        });


        //food request related APIs

        const foodRequestCollection = database.collection("foodRequests");
        //create a new food request
        app.post('/food-request', async (req, res) => {
            const foodRequest = req.body;
            const result = await foodRequestCollection.insertOne(foodRequest);
            res.send(result);
        });

        //get all food requests by requester email
        app.get('/food-requests', async (req, res) => {
            const email = req.query.email;
            const query = {};
            if (email) {
                query.requesterEmail = email; // Filter by email if provided
            }
            const foodRequests = await foodRequestCollection.find(query).toArray();
            res.send(foodRequests);
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
