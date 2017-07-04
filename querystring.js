const querystring = require('querystring');
const log = console.log.bind(console)

let str1 = 'foo=bar&abc=xyz&abc=123';
let str2 = querystring.parse(str1)
log(str2); //{ foo: 'bar', abc: [ 'xyz', '123' ] }

let str3 = querystring.escape(str1); //foo%3Dbar%26abc%3Dxyz%26abc%3D123
let str4 = querystring.unescape(str3); //foo=bar&abc=xyz&abc=123

let str5 = querystring.stringify(str2)
log(str5)  //foo=bar&abc=xyz&abc=123

let str6 = querystring.parse(str3, null, null, {decodeURIComponent: querystring.unescape})
log(str6)