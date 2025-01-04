const express = require("express");
const path = require("path");
const app = express();
const weatherData = require("../utils/weatherData");

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Weather API')
})
app.get("/weather", (req, res) => {
    if (!req.query.address) {
      return res.send("Address is required");
    }
    weatherData(req.query.address, (error, result) => {
      if (error) {
        return res.send(error);
      }
  
      res.send(result);
    });
  });

  app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
  })