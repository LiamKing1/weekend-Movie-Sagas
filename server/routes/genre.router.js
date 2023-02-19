const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 'SELECT * FROM genres JOIN movies_genres ON genre.id = movies_genres.genres_id ORDER BY "title" ASC'
  pool.query(queryText)
  .then((response) => {
    console.log('In genres GET router', response);
  }).catch((error) => {
    console.log('There was an error in genres GET router', error);
  })
  res.sendStatus(500)
});

module.exports = router;