const client = require('./client.js');
const {createSchool} = require('./schools.js');
const { createStudent } = require('./students.js');

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
            CREATE TABLE students(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                grade_level INTEGER,
                gpa FLOAT(2),
                start_date DATE,
                graduation_date DATE,
                school_id INTEGER REFERENCES schools(id)
                );
        
        `);


    } catch (error) {
       console.log(error); 
    }
}

const dropTables = async() => {
    try {
        await client.query(`DROP TABLE IF EXISTS students, schools;
                            `);
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
        console.log('CREATE TABLES');
        await createSchool('Rutgers');
        console.log('ADD SCHOOLS');
        await createStudent('Jeff');
        console.log('ADD STUDENTs');
        client.end();
    }catch(err){console.log(err)};

}

syncAndSeed();
