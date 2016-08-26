/**
 * Created by user on 8/18/16.
 */
var app = angular.module('tinyurlApp',['ngRoute', 'ngResource']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });

});