//verifica se o usuário está logado para acessar 'tal' rota
const auth = (req, res, next) => {
    const isAuth = req.cookies.user;
   
    if (isAuth) {
      next();
    }
    
    else {
      req.session.destroy();
      res.clearCookie("user");     
      res.redirect("/");
    }
  };
  module.exports = auth;