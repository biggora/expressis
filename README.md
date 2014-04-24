expressis
=========

Fast, unopinionated, minimalist web framework for NodeJS.

```js
var expressis = require('expressis');
var app = expressis();

app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

## Installation

    $ npm install expressis

## Features

  * Robust routing
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Focus on high performance
  * Executable for generating applications quickly
  * High test coverage

## Middleware

These middleware and libraries are included:

  - expressis.bodyParser() [body-parser](https://github.com/expressjs/body-parser)
  - expressis.json() [body-parser](https://github.com/expressjs/body-parser)
  - expressis.urlencoded() [body-parser](https://github.com/expressjs/body-parser)
  - expressis.multipart() [connect-multiparty](https://github.com/andrewrk/connect-multiparty)
  - expressis.compress() [compression](https://github.com/expressjs/compression)
  - expressis.timeout() [connect-timeout](https://github.com/expressjs/timeout)
  - expressis.cookieParser() [cookie-parser](https://github.com/expressjs/cookie-parser)
  - expressis.cookieSession() [cookie-session](https://github.com/expressjs/cookie-session)
  - expressis.csrf() [csurf](https://github.com/expressjs/csurf)
  - expressis.errorHandler() [errorhandler](https://github.com/expressjs/errorhandler)
  - expressis.session() [express-session](https://github.com/expressjs/session)
  - expressis.methodOverride() [method-override](https://github.com/expressjs/method-override)
  - expressis.logger() [morgan](https://github.com/expressjs/morgan)
  - expressis.responseTime() [response-time](https://github.com/expressjs/response-time)
  - expressis.directory() [serve-index](https://github.com/expressjs/serve-index)
  - expressis.static() [serve-static](https://github.com/expressjs/serve-static)
  - expressis.favicon() [static-favicon](https://github.com/expressjs/favicon)
  - expressis.flash() [connect-flash](https://github.com/jaredhanson/connect-flash)
  - expressis.useragent() [express-useragent](https://github.com/biggora/express-useragent)
  - expressis.vhost() [vhost](https://github.com/expressjs/vhost)
  - expressis.basicAuth()
  - app.param() [express-params](https://github.com/visionmedia/express-params)

## More Information

  * [Website and Documentation](http://expressjs.com/) stored at [visionmedia/expressjs.com](https://github.com/visionmedia/expressjs.com)
  * Join #express on freenode
  * [Google Group](http://groups.google.com/group/express-js) for discussion
  * Follow [tjholowaychuk](http://twitter.com/tjholowaychuk) and [defunctzombie](https://twitter.com/defunctzombie) on twitter for updates
  * Visit the [Wiki](http://github.com/visionmedia/express/wiki)
  * [Русскоязычная документация](http://jsman.ru/express/)
  * Run express examples [online](https://runnable.com/express)
