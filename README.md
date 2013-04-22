RemoteIP
--------

A simple method for getting the client IP address for the remote browser in node.js.
Demo @ http://remoteip.herokuapp.com

```bash
$ npm install remoteip
```

## Usage
```
var remoteip = require('remoteip');

// Get the IP address for the user.
var ipAddress = remoteip.get(req);
```

## Notes

The client IP address is determined by the following:

1. Check the x-forwarded-for HTTP header for a remote IP address.
2. Check the req.connection.remoteAddress property.

## Author

Kory Becker
http://www.primaryobjects.com
