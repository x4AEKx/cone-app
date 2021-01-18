const calc = (H, R, N) => {

    let arrH = [];
    let arrPoints = [];

    for (let i = 0; i < N; i++) {
      arrH.push(H);
    }

    for (let i = 0; i < N; i++) {
      arrPoints.push([0, 0, arrH[i]]);
      arrPoints.push([
        R * Math.cos((2 * Math.PI * i) / N),
        R * Math.sin((2 * Math.PI * i) / N),
        0,
      ]);
      arrPoints.push([
        R * Math.cos((2 * Math.PI * (i + 1)) / N),
        R * Math.sin((2 * Math.PI * (i + 1)) / N),
        0,
      ]);
    }

    return arrPoints;
};

module.exports.calc = calc