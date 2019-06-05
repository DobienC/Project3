const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => 
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
  signup: function(req, res) {
    const { username, email, password } = req.body;

    bcrypt.hash(password, 10, function(err, hash) {
      const user = {
        username,
        email,
        password: hash
      };

      db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },
  login: function(req, res) {
    const { email, password } = req.body;

    db.User
      .findOne({ email })
      .then(dbModel => {
        bcrypt.compare( password, dbModel.password, function(err, same){
          if(same){
            const token = jwt.sign({
              username: dbModel.username,
              id: dbModel._id
            }, "super-secrete");
            return res.json({ token });
          } else {
            return res.status(404).json({
              error: "Passowrd/Email not matching"
            })
          }
        })
      })
      .catch(err => res.status(403).json(err));
  }
};
    //   deleteAll: function(req, res) {
    //     db.User
    //       .remove({})
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
