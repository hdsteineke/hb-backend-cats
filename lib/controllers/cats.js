const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()

  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat);
  })

  .get('/', (req, res) => {
    const singleCat = cats.map((cat) => cat.id === id);
    res.json({ id: cat.id, name: cat.name });
  });
