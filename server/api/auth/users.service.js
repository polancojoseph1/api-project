const config = require('../config.json');
const jwt = require('jsonwebtoken');
const { User } = require('../../db');

module.exports = {
    authenticate
};

async function authenticate({ email, password }) {
  const user = await User.findOne({ email: email, password: password }).exec();

  if (!user) throw 'Email or password is incorrect';

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

  return {
      ...omitPassword(user),
      token
  };
}

// Returns the user with the password omitted
function omitPassword(user) {
  const { password, ...userWithoutPassword } = user._doc;
    return userWithoutPassword;
}