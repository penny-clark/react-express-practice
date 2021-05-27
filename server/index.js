const express = require("express");

const PORT = 3001;

const app = express();
const BodyParser = require('body-parser')

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static('public'));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/mailinglist", (req, res) => {
  console.log(req.body, "Received email in server!")
  const email = req.body.email
  .then(email => {
    res.json,({ email })
  })
  .catch(err => {
  console.log(err, "no can do")
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});