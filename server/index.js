const app = require("./src/app");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port  ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
