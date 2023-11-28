const client = require('./client.js');

const createTables = async() => {
    try {
        await client.query(`
            CREATE TABLE schools(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                city VARCHAR(40),
                state CHAR(2),
                zip_code CHAR(5),
                is_accredited BOOLEAN
            );
        `)


    } catch (error) {
        
    }
}

const dropTables = async() => {
    try {
        await client.query(`DROP TABLE IF EXISTS schools;`);
    } catch (error) {
        console.log(error);
    }
}

const syncAndSeed = async () =>{
    try{
        await client.connect();
        console.log('CONNECTED');
        await dropTables();
        console.log('DROP TABLES');
        await createTables();
        console.log('CREATE TABLES')

        client.end();
    }catch(err){console.log(err)};

}

syncAndSeed();
