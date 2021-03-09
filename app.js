const express = require("express");
const path = require("path");

const app = express();

// const whitelist = ['http://localhost:3000'​, 'http://localhost:8000'​, 'https://cone-3d-app.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))

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
