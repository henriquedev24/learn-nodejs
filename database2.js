var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dc"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM produtos", function (err, result) {
      if (err) throw err;
      console.log(result);
      process.exit();
    });
  });
