const { Router } = require("express");
const router = Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { calc } = require("./../utils/calc/calc");

// /api/calculation
router.post("/calculation", jsonParser, (req, res) => {
	try {
		const { coneHeight, Radius, segmentsNumber } = req.body;

		res.status(200).send({
			array: calc(parseInt(coneHeight), Radius, segmentsNumber),
		});
	} catch (e) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = router;
