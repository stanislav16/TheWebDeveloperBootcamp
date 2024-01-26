const express = require("express");
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoute = require("./routes/admin");
const app = express();
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoute);
app.listen(3000, () => {
  console.log("Server started");
});
