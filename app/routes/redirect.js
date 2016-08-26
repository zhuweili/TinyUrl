/**
 * Created by user on 8/9/16.
 */
var express = require('express');
var router = express.Router();
var uslService = require('../services/urlService');

router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = uslService.getLongUrl(shortUrl, function(url) {
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.sendFile('404.html', { root: './public/views'});
        }
    });

});

module.exports = router;