const jwt = require("jsonwebtoken");

module.exports = (function(req, res, next) {
    const token = req.header("Authorization");
    let bearer = "";
    if(token){
      bearer = token.replace("Bearer ", "");
    } else {
      return res.status(403).json({
        error: "Authorization required"
      })
    }
  
    jwt.verify(bearer, "super-secrete", function(err, decoded) {
      if(err){
        return res.status(403).json({
          error: "Authorization required"
        })
      }
      console.log(decoded);
      req.user = decoded;
      next();
    });
  });
  