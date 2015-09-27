var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

/* GET users listing. */
router.get('/', function(req, res, next) {
	spotifyApi.getArtistAlbums('6mdiAmATAx73kdxrNrnlao',{market : 'GB',limit : 50})
 	.then(function(data) {
    res.json(data.body);
  	}, function(err) {
    console.error(err);
  	});
});

module.exports = router;
