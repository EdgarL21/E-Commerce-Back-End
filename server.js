const express = require("express");
const { sequelize } = require("./models/Product");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// Connect to the database before starting the Express.js server
// sync sequelize models to the database, then turn on the server
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
