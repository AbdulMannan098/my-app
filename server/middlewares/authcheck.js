const User=require('../models/user')

// exports.authCheck=async(req,res,next)=>{
//     try{
        
//     }
//     catch(err){
//         res.status(401).json({
//             err: "Invalid or expired token",
//         })
//     }
// }

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send('Unauthorized');
  };
  
  const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.status(403).send('Forbidden');
  };
  
module.exports = { isLoggedIn, isNotLoggedIn };
  