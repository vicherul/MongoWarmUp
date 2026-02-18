
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,   
        strict: true,
        deprecationErrors: true,
    }
});
async function run () {

app.get('/products', async (req, res) => {  
    try {
        await client.connect();
        await client.db(""). comand({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
        const dbName = "");
        const adninDb = client.db('')
        const dbList = await adminDb().listDatabases();
        cons exists = dbList.database.some((db) => db.name === dbName;
        
       if (exists) {
           console.log(`La base de datos "${dbName}" existe.`);
       } else {    
           console.log(`La base de datos "${dbName}" NO existe.`);
       }
    }
    } catch (error) {
         console.log("Error connecting to MongoDB:", error);
    }
      finally {
          await client.close();
    }
}
run().catch(console.dir);
