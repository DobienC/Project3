const db = require("../models");
//

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Character
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Character
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCharacter: function(req, res) {
    db.Character
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteAll: function(req, res) {
    db.Character
      .remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
