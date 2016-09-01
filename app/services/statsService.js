/**
 * Created by user on 8/31/16.
 */
var logRequest = function(shortUrl, req) {
    var reqInfo = {};
    reqInfo.shortUrl = shortUrl;
    reqInfo.referer = req.headers.referer || 'Unknown';
    reqInfo.platform

};

module.exports = {
    logRequest: logRequest
};