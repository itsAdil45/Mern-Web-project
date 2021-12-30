//sets user variable for pug files
async function sessionAuth(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.isAdmin = false;
    if (req.session.user) {
      res.locals.isAdmin = Boolean(
        req.session.user.roles.find((r) => r == "admin")
      );
    } else req.session.user = null;

    next();
  }
  
  module.exports = sessionAuth;