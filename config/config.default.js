'use strict';

/**
 * egg-passport-gitlab default config
 * @member Config#passportGitlab
 * @property {String} SOME_KEY - some description
 */
exports.passportGitlab = {
  key: 'your key',
  secret: 'your secret',
  callbackURL: '/passport/github/callback',
  baseURL: 'https://gitlab.com/', // 可修改为本地部署的gitlab地址
};
