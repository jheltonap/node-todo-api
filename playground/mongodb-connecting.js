const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    const adminDb = client.db('TodoApp');
    adminDb.collection('Users').insertOne(
        {
        cpj: '12.345.678/9123-45',
        name: 'Andrew', 
        age: 20,
        location: 'Estrada do Frio, 100, Paulista-PE'
    }, (err, result)=>{
        if (err)
        {
            return console.log('Unable to insert one');
        }
        console.log(result.ops);
    })
    
    client.close();
});