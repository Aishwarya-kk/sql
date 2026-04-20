const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        database:'app',

        password:'shalini'
    }
);

connection.query("SHOW TABLES",(err,resu)=>{
    console.log(err);
    console.log(resu);
})

connection.end();
 let create=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
   
    password: faker.internet.password(),
   
  };
}
console.log(create());