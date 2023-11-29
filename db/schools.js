const client = require('./client');

const createSchool = async( name, city, state ) => {
    try {
        await client.query(`
        INSERT  INTO schools (name, city, state)
        VALUES ('${name}','${city}','${state}');
    `);

    } catch (error) {
       console.log(err); 
    }

}
module.exports = {createSchool}