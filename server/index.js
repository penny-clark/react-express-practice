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

const gifURL=`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}=${gif}&limit=1&offset=0&rating=g&lang=en`
  axios.get(gifURL)
    .then((res) => {
      console.log(res.data)
      setCoolGif(res.data.data[0].url);
      console.log('Success:', res.data.data[0].url)
    })
    .catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});