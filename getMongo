import dotenv from 'dotenv';    
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();
const PORT = 3000;

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,   
        strict: true,
        deprecationErrors: true,
    }
})

app.get('/products', async (req, res) => {  
    try {
        await client.connect();
        const db = client.db('SocialNetwork');
        const products = db.collection('Publisher');
        const lista = await products.find({}).toArray();
        res.json({success: true, data: lista});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    } finally {
        await client.close;
    }
})
