const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

// Queries db for cards of a certain name
router.get('/cards/:name', (req, res) => {
  console.log('Hit GET /cards/:name');
  db.Card.findAll({
    where: {
      name: req.params.name,
    },
  }).then((result) => {
    res.send([result]);
  });
});

// Creates a deck with a user id and the name of the deck
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

// Will pull the info for a deck, like decklist and name of deck.
router.get('/deck/:id', (req, res) => {
  db.deck.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

// Deletes a deck by its id.
router.delete('/deck/:id', (req, res) => {
  db.deck.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

// eslint-disable-next-line max-len
// Unsure if I will need to ever get info for a specific deckitem. I think I would just use get /deck/:id
router.get('/deckitem/:id', (req, res) => {
  res.json('test');
});

// Adds a card to a deck, or updates the quantity of a card in a deck
router.put('/deckitem/:id', (req, res) => {
  db.deckitem.update({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send([result]);
  });
});

// Should remove a card from a deck Or just decrement the quantity
router.delete('/deckitem/:deckID/:cardID', (req, res) => {
  res.json('test');
});


module.exports = router;
