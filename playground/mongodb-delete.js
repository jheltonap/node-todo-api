const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }

    const adminDb = client.db('TodoApp');
    adminDb.collection('Users').deleteMany({name:'Helton'}).then(()=>{}, (err)=>{
        if(err){
            console.log('Unable to delete ',err);
        }
    });
    adminDb.collection('Users').deleteOne({name:'Andrew'}).then(()=>{}, (err)=>{
        if(err){
            console.log('Unable to delete ',err);
        }
    });
    adminDb.collection('Users').findOneAndDelete({name:'Andrew'}).then(()=>{}, (err)=>{
        if(err){
            console.log('Unable to delete ',err);
        }
    });
});