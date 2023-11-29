const client = require('./client');

const createTeacher = async( name, subject, school_id ) => {
    try {
        await client.query(`
        INSERT  INTO teachers (name, subject, school_id)
        VALUES ('${name}', '${subject}',${school_id});
    `);

    } catch (error) {
       console.log(err); 
    }

}
module.exports = {createTeacher}