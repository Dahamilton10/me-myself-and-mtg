const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

router.get('/cards', (req, res) => {
  console.log('Hit GET /cards');
  db.card.findAll({
    where: {
      name: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

router.post('/deck/:userid/:name', (req, res) => {
  db.deck.create({
    where: {
      id: req.params.userid,
      name: req.params.name,
    },
  }).then((result) => {
    res.send([result]);
  });
});

router.get('/deck/:id', (req, res) => {
  db.deck.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

router.delete('/deck/:id', (req, res) => {
  db.deck.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

router.get('/deckitem/:id', (req, res) => {
  res.json('test');
});

router.put('/deckitem/:id', (req, res) => {
  db.deckitem.update({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

router.delete('/deckitem/:deckID/:cardID', (req, res) => {
  res.json('test');
});


module.exports = router;
