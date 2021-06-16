/**
 * @author: laoona
 * @date:  2021-06-16
 * @time: 10:24
 * @contact: laoono.com
 * @description: #
 */
'use strict';

const Strategy = require('passport-gitlab2').Strategy;

module.exports = app => {
  const config = app.config.passportGitlab;
  config.passReqToCallback = true;
  config.clientID = config.key;
  config.clientSecret = config.secret;

  // must require `req` params
  app.passport.use('gitlab', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    // format user
    const user = {
      provider: 'gitlab',
      id: profile.id,
      name: profile.username,
      displayName: profile.displayName,
      photo: profile.avatarUrl,
      accessToken,
      refreshToken,
      params,
      profile,
    };

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
