const app = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = 3002;
conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
