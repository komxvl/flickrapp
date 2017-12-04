var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var parse = require('url').parse;
var Flickr = require('flickr-sdk');

CONSUMER_KEY = "255133fe0b2787dba24b3e287d689b77";
CONSUMER_SECRET = "5793bacd0b4bfbdb";

var oauth = new Flickr.OAuth(
	CONSUMER_KEY,
	CONSUMER_SECRET
);

var port = process.env.PORT || 8080;
var router = express.Router();
var response;
var requestTokenSecret;
var flickr = new Flickr(CONSUMER_KEY);
function getRequestToken(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	oauth.request('http://localhost:8080/oauth/callback').then(function (_res) {
		var requestToken = _res.body.oauth_token;
		requestTokenSecret = _res.body.oauth_token_secret;
		console.log(oauth.authorizeUrl(requestToken, 'write'));
		var rule = "delete";
		res.send({'link':oauth.authorizeUrl(requestToken, rule),
		'body':_res.body});

	}).catch(function (err) {
		res.statusCode = 400;
		res.end(err.message);
	});
}
var oauthTokenSecret;
var fullUserInfo;
function verifyRequestToken(req, res, query) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	var requestToken = query.oauth_token;
	var oauthVerifier = query.oauth_verifier;



	oauth.verify(requestToken, oauthVerifier, requestTokenSecret).then(function (_res) {
		fullUserInfo = _res.body;
		var userNsid = _res.body.user_nsid;
		var oauthToken = _res.body.oauth_token;
		oauthTokenSecret = _res.body.oauth_token_secret;
		var flickr;
		flickr = new Flickr(oauth.plugin(
			oauthToken,
			oauthTokenSecret
		));
		flickr.test.login().pipe(res);

	}).catch(function (err) {
		res.statusCode = 400;
		res.end(err.message);
	});
}

app.get('/getToken', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	return getRequestToken(req, res);
	 
});
app.get('/oauth/callback', function(req, res) {
	var url = parse(req.url, true);
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	return verifyRequestToken(req, res, url.query);
});

var userNsid;
app.get('/getUserInfo', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	console.log("fullUserInfo",fullUserInfo.user_nsid);
	userNsid = fullUserInfo.user_nsid;
	res.send(fullUserInfo);
});

app.get('/list-albums' , function (req,res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	flickr.photosets.getList({
		user_id:userNsid
	}).then(function (_res ,_req) {
		console.log("_RESR");
		console.log(_res.body);
		res.send(_res.body);

	});
});

app.get('/album/:id' , function (req,res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	var id = req.params.id;
	console.log("album id",id);
	flickr.photosets.getPhotos({
		photoset_id:id,
		user_id:userNsid
	}).then(function (_res ,_req) {
		console.log(_res.body);
		res.send(_res.body);
	});
});

app.get('/image/:id' , function (req,res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	var id = req.params.id;
	console.log("image id",id);
	flickr.photos.getInfo({
		photo_id:id
	}).then(function (_res ,_req) {
		console.log(_res.body);
		res.send(_res.body);
	});
});

app.listen(port);
console.log('Start...' + port);