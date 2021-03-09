const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "client/build")));
	// Handle React routing, return all requests to React app
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.use("/api", require("./routes/calculation.routes"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`App has been started on port ${PORT}...`);
});
