const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 
  pool.query(queryText)
  .then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  })
  res.sendStatus(500)
});

module.exports = router;