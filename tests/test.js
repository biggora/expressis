/**
 *
 *  @revision    $Id: index.js 2014-04-23 04:54:16 Aleksey $
 *  @created     2014-04-23 04:54:16
 *  @category    Connect Middlewares
 *  @package     expressis
 *  @version     0.0.1
 *  @copyright   Copyright (c) 2009-2014 - All rights reserved.
 *  @license     MIT License
 *  @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 *  @link        http://www.gordejev.lv/
 *
 */

var expressis = require('./../');
//var express = require('express');
// console.log(expressis)
var app = expressis();

app.use(expressis.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(expressis.logger('dev')); 			// log every request to the console
app.use(expressis.bodyParser()); 				// pull information from html in POST
app.use(expressis.methodOverride()); 			// simulate DELETE and PUT

app.listen(8080);
console.log('Magic happens on port 8080'); 			// shoutout to the user
/**/
/*
 * { bodyParser: { [Function: bodyParser] json: [Function: json], urlencoded: [Function: urlencoded] },
 */

