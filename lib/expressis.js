/**
 *
 *  @revision    $Id: index.js 2014-04-23 04:54:16 Aleksey $
 *  @created     2014-04-23 04:54:16
 *  @package     expressis
 *  @version     0.0.1
 *  @copyright   Copyright (c) 2009-2014 - All rights reserved.
 *  @license     MIT License
 *  @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 *  @link        http://www.gordejev.lv/
 *
 */
var express = require('express');
var params = require('express-params');

exports = module.exports = createApplication;

function createApplication() {
    var app = express();
    params.extend(app);
    return app;
};

/**
 * Expose the prototypes.
 */
exports.application = express.application;
exports.request = express.request;
exports.response = express.response;

/**
 * Expose constructors.
 */
exports.Route = express.Route;
exports.Router = express.Router;

/**
 * Expose middleware
 */
exports.query = express.query;
exports.static = express.static;

/* Docs https://github.com/expressjs/body-parser */
var bodyParser = require('body-parser');
exports.bodyParser = bodyParser;
exports.json = bodyParser.json;
exports.urlencoded = bodyParser.urlencoded;

/* Docs https://github.com/expressjs/method-override */
exports.methodOverride = require('method-override');

/* Docs https://github.com/expressjs/compression */
exports.compress = require('compression');

/* Docs https://github.com/expressjs/cookie-parser */
exports.cookieParser = require('cookie-parser');

/* Docs https://github.com/expressjs/cookie-session */
exports.cookieSession = require('cookie-session');

/* Docs https://github.com/expressjs/morgan */
exports.logger = require('morgan');

/* Docs https://github.com/expressjs/session */
exports.session = require('express-session');

/* Docs https://github.com/expressjs/favicon */
exports.favicon = require('static-favicon');

/* Docs https://github.com/expressjs/csurf */
exports.csrf = require('csurf');

/* Docs https://github.com/expressjs/errorhandler */
exports.errorHandler = require('errorhandler');

/* Docs https://github.com/expressjs/response-time */
exports.responseTime = require('response-time');

/* Docs https://github.com/biggora/express-useragent */
exports.ua = require('express-useragent');
exports.useragent = require('express-useragent').express;

/* 
 * Docs hhttps://github.com/andrewrk/node-multiparty
 *      https://github.com/andrewrk/connect-multiparty
 */
exports.multipart = require('connect-multiparty');

/* Docs https://github.com/expressjs/vhost */
exports.vhost = require('vhost');

/* Docs https://github.com/jaredhanson/connect-flash */
exports.flash = require('connect-flash');

exports.basicAuth = require('./basicAuth');