// Add Express
const express = require("express");
// const { connectToDatabase, ToggleModel } = require("../db");

// Initialize Express
const app = express();

let cachedDb = null;

// Create GET request
app.get("/", async (req, res) => {
  // if (!cachedDb) {
  //   cachedDb = await connectToDatabase();
  // }

  // const docs = await ToggleModel.find()
  //     .then((docs) => {
  //       console.log('docs', docs);
  //       if (docs && docs.constructor === Array && docs.length === 0) {
  //         // res.status(404).send({ message: 'No Toggle(s) found' });
  //         return [];
  //       } else {
  //         console.log('ERROR: docs', docs);
  //         return docs;
  //         // TODO: send most recent
  //         // return res.status(200).send(searchByName ? docs[0] : docs);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('ERROR: err', err);
  //       return [];
  //       // res.status(500).send({ message: 'Error finding application', err });
  //     });

  // console.log('cachedDb', cachedDb);
  res.send('Hello World!');
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;