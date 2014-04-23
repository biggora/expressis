expressis
=========

Fast, unopinionated, minimalist web framework for NodeJS.

```js
var expressis = require('expressis');
var app = expressis();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```


## Installation

    $ npm install expressis

