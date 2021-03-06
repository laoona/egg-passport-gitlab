# egg-passport-gitlab

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-gitlab.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-gitlab
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-gitlab.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-gitlab
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-gitlab.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-gitlab?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-gitlab.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-gitlab
[snyk-image]: https://snyk.io/test/npm/egg-passport-gitlab/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-gitlab
[download-image]: https://img.shields.io/npm/dm/egg-passport-gitlab.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-gitlab

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-gitlab --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportGitlab = {
  enable: true,
  package: 'egg-passport-gitlab',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportGitlab = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
