const url = require('url');
const {URL, URLSearchParams} = require('url');
const log = console.log.bind(console);
let url_str = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';
log(url.parse(url_str))
const myurl = new URL(url_str);
log(myurl, myurl.protocol)

/**
 * Url {
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.host.com:8080',
  port: '8080',
  hostname: 'sub.host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'}
 */

log(myurl.toString()) //https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash
log(myurl.toJSON()) //同上
log(myurl.href) //同上
log(myurl.searchParams.get('query')) //string
myurl.searchParams.append('abc', 'xyz');
log(myurl.href) //https://user:pass@sub.host.com:8080/p/a/t/h?query=string&abc=xyz#hash







