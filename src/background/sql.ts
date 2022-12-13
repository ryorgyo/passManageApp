import * as mysql from "promise-mysql";

async function connection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "passManageUser",
    password: "1234abcd",
    database: "passManage",
    multipleStatements: true,
  });

  return connection;
}

connection()
  .then((connection) => {
    // console.log(connection);
    const result = connection.query(
      // "insert into users(name,password) values ('ryorgyo','1234abcd')"
      "SELECT * FROM users"
    );
    connection.end();

    return result;
  })
  .then(function (rows) {
    console.log(rows);
  });
