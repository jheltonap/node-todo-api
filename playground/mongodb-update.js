const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }

    const adminDb = client.db('TodoApp');
    adminDb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5cb37af68313a71884d68f77')
    }, {
        $set:{
            age:20
        }
    }, {
        returnOriginal: false
    }).then((result)=>{console.log(result)}, (err)=>{
        if(err){
            console.log('Unable to delete ',err);
        }
    });
});