const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }

    const adminDb = client.db('TodoApp');
    adminDb.collection('Users').find({name:'Helton'}).count().then((count)=>{
        console.log("Count: ",count);
    },(err)=>{
        console.log('Unable to fetch todos',err)
    });
    
});