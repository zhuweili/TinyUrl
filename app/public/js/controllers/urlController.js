var app = angular.module("tinyurlApp");

var port_for_docker = 8000;

app.controller("urlController",
    ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    $http.get("/api/v1/urls/" + $routeParams.shortUrl)
        .success(function (data) {
            $scope.shortUrl = data.shortUrl;
            $scope.longUrl = data.longUrl;
            $scope.shortUrlToShow = "http://localhost:"+ port_for_docker + "/" + data.shortUrl;
        });
    $http.get("/api/v1/urls/" + $routeParams.shortUrl + "/totalClicks")
        .success(function(data) {
            $scope.totalClicks = data;
        });
}]);