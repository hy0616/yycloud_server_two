'use strict';

var main = angular.module('mainApp', [
    'service.index',

    'theme.home',
    'theme.Navigation',
    'theme.production',
    'them.machining',
    'them.sale',
    'theme.analysis',

    'theme.homeShareData',
    'theme.directives',

    'ngRoute'
]);

main.controller('mainCtr', ['$rootScope', '$scope', 'localStorage', 'plantTask',
    function ($rootScope, $scope, localStorage, plantTask) {

    localStorage.login_check();//login watch
     $scope.plantTaskData = plantTask.plantTaskData;//首页种植任务数据

}]);


main.config(['$provide', '$routeProvider', '$locationProvider', function ($provide, $routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home/index.html'
    })
    .when('/:id', {
        templateUrl: function (param) {
            return './views/home/' + param.id + '.html';
        }
    })
        .when('/analysis/:id', {
            templateUrl: function (param) {
                return './views/analysis/' + param.id + '.html';
            }
        })
        .when('/machining/:id', {
            templateUrl: function (param) {
                return './views/machining/' + param.id + '.html';
            }
        })
        .when('/plan/:id', {
            templateUrl: function (param) {
                return './views/plan/' + param.id + '.html';
            }
        })
        .when('/production/:id', {
            templateUrl: function (param) {
                return './views/production/' + param.id + '.html';
            }
        })

        .when('/resource/:id', {
            templateUrl: function (param) {
                return './views/resource/' + param.id + '.html';
            }
        })
        .when('/resume/:id', {
            templateUrl: function (param) {
                return './views/resume/' + param.id + '.html';
            }
        })
        .when('/sale/:id', {
            templateUrl: function (param) {
                return './views/sale/' + param.id + '.html';
            }
        })
        .when('/serviceCentre/:id', {
            templateUrl: function (param) {
                return './views/serviceCentre/' + param.id + '.html';
            }
        })
    .otherwise({
        redirectTo: '/'
    });

    //$locationProvider.html5Mode(true);
}]);
