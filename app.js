const express = require("express"),
  app = express(),
  appPort = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(appPort, () => console.log(`Express running on ${appPort} port`));
