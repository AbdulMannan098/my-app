const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Assume you have a users array or a database to store user data
const users = [{ id: 1, username: 'user', password: 'password' }];

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return done(null, false, { message: 'Incorrect username or password' });
  }
  return done(null, user);
}));
