const router = require('express').Router();
const mtg = require('mtgsdk');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

router.get('/cards', (req, res) => {
  console.log('Hit GET /cards');
  mtg.card.find(3).then((result) => {
    res.send([result.card]);
  });
});

module.exports = router;
