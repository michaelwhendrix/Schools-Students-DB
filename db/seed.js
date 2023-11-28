const client = require('./client.js');

const syncAndSeed = async () =>{
    try{
        await client.connect();
        console.log('CONNECTED');


        client.end();
    }catch(err){console.log(err)};

}

syncAndSeed();
