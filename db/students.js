const client = require('./client');

const createStudent = async( name, grade_level, gpa ) => {
    try {
        await client.query(`
        INSERT  INTO students (name, grade_level, gpa)
        VALUES ('${name}', ${grade_level}, ${gpa});
    `);

    } catch (error) {
       console.log(err); 
    }
}
module.exports= {createStudent}