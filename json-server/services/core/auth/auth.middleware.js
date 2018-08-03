const { get, toLower, find } = require('lodash');
const express = require('express');
const router = express.Router();

module.exports = server => {
  router.post('/auth/login', (req, res, next) => {
    const users = server.db.getState().users;
    const paramsLogin = toLower(get(req, 'body.params.login'));
    const paramsPass = toLower(get(req, 'body.params.password'));

    const matchedUser = find(
      users,
      ({ login }) => toLower(login) === paramsLogin,
    );

    if (!matchedUser) {
      res.status(401).send('Wrong username');
    } else if (matchedUser.password === paramsPass) {
      res.json({ token: matchedUser.fakeToken });
    } else {
      res.status(401).send('Wrong password');
    }
  });

  router.post('/auth/userinfo', (req, res, next) => {
    const users = server.db.getState().users;
    const matchedUser = users.find(user => {
      return user.fakeToken === req.header('Authorization');
    });

    if (!matchedUser) {
      res.status(401).send('Unauthorized');
    } else {
      res.json(matchedUser);
    }
  });

  return router;
};
