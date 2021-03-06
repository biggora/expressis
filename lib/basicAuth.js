/**
 *
 *  @revision    $Id: basicAuth.js 2014-04-23 04:54:16 Aleksey $
 *  @created     2014-04-23 04:54:16
 *  @package     expressis
 *  @version     0.0.1
 *  @copyright   Copyright (c) 2009-2014 - All rights reserved.
 *  @license     MIT License
 *  @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 *  @link        http://www.gordejev.lv/
 *
 */
module.exports = function basicAuth(callback, realm) {
    var username, password;

    // user / pass strings
    if ('string' === typeof callback) {
        username = callback;
        password = realm;
        if ('string' !== typeof password)
            throw new Error('password argument required');
        realm = arguments[2];
        callback = function(user, pass) {
            return user === username && pass === password;
        };
    }

    realm = realm || 'Authorization Required';

    return function(req, res, next) {
        var authorization = req.headers.authorization;

        if (req.user)
            return next();
        if (!authorization)
            return unauthorized(res, realm);

        var parts = authorization.split(' ');

        if (parts.length !== 2)
            return next(utils.error(400));

        var scheme = parts[0]
                , credentials = new Buffer(parts[1], 'base64').toString()
                , index = credentials.indexOf(':');

        if ('Basic' !== scheme || index < 0)
            return next(utils.error(400));

        var user = credentials.slice(0, index)
                , pass = credentials.slice(index + 1);

        // async
        if (callback.length >= 3) {
            var pause = utils.pause(req);
            callback(user, pass, function(err, user) {
                if (err || !user)
                    return unauthorized(res, realm);
                req.user = req.remoteUser = user;
                next();
                pause.resume();
            });
            // sync
        } else {
            if (callback(user, pass)) {
                req.user = req.remoteUser = user;
                next();
            } else {
                unauthorized(res, realm);
            }
        }
    };
};

