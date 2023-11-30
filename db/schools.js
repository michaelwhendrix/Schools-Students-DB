const client = require('./client');

const getSchools = async () => {
    try {
        await client.connect();
         const {rows} =  await client.query(`
            SELECT * FROM schools;`);
            console.log(rows);
        client.end;
            return rows;

    }catch (error) {
        console.log(error);
    }
}

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
module.exports = {getSchools, createSchool }