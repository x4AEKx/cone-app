const { Router } = require("express");
const router = Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// /api/calculation
router.post("/calculation", jsonParser, (req, res) => {
  try {
    const { coneHeight, Radius, segmentsNumber } = req.body;

    const calc = (H, R, N) => {
      let arr = [];
      for (let i = 0; i < N; i++) {
        arr.push([0, 0, parseInt(H)]);
        arr.push([
          R * Math.cos((2 * Math.PI * i) / N),
          R * Math.sin((2 * Math.PI * i) / N),
          0,
        ]);
        arr.push([
          R * Math.cos((2 * Math.PI * (i + 1)) / N),
          R * Math.sin((2 * Math.PI * (i + 1)) / N),
          0,
        ]);
      }
      return arr;
    };

    res.status(200).send({
      array: calc(coneHeight, Radius, segmentsNumber),
    });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
