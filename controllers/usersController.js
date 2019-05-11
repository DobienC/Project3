const db = require("../models");
//

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
    //   deleteAll: function(req, res) {
    //     db.User
    //       .remove({})
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
