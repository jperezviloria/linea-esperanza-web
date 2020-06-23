require("dotenv").config();

const app = require("./app");
require("./database");

async function main() {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
  }

  await app.listen(app.get("port"));
  console.log("Server on the port", app.get("port"));
}

main();
