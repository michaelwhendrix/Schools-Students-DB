const client = require('./client');

const createStudent = async( name ) => {
    try {
        await client.query(`
        INSERT  INTO students (name)
        VALUES ('${name}');
    `);

    } catch (error) {
       console.log(err); 
    }
}
module.exports= {createStudent}