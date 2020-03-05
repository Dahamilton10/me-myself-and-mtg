const router = require('express').Router();
const mtg = require('mtgsdk');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

router.get('/cards', (req, res) => {
  console.log('Hit GET /cards');
  res.json('Hit GET /cards');
  mtg.card.find(3).then((result) => {
    console.log(result.card.name);
  });
});

module.exports = router;
