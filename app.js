const express = require("express");
const config = require("config");

const app = express();

app.use("/api", require("./routes/calculation.routes"));

const PORT = config.get("port") || 8000;

app.listen(PORT, () => {
	console.log(`App has been started on port ${PORT}...`);
});
