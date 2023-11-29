const client = require('./client');

const createSchool = async( name ) => {
    try {
        await client.query(`
        INSERT  INTO schools (name)
        VALUES ('${name}');
    `);

    } catch (error) {
       console.log(err); 
    }

}
module.exports = {createSchool}