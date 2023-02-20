const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT "genres"."name" FROM "movies" 
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = $1`
  pool.query(queryText, [genresId])
  .then((result) => {
    console.log('In genres GET router', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('There was an error in genres GET router', error);
    res.sendStatus(500);
  })
});

module.exports = router;