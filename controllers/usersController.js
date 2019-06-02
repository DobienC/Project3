const db = require("../models");
const bcrypt = require("bcrypt");

//

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => 
        // res.json(bcrypt.hashSync(dbModel[0].password, 10))
        res.json(dbModel)
      )
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User
      .findOne(req.query)
      .then(dbModel => 
        res.json(dbModel)
      )
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
