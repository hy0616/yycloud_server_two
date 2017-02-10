/**
 * Created by hy on 16-6-14.
 */
angular.module('service.localStorage', ['LocalStorageModule'])

   /* .config(function(localStorageServiceProvider){
        localStorageServiceProvider
            .setStorageType('localStorage');
    })*/

    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('yy');
        localStorageServiceProvider.setStorageType('localStorage');
    }])

.service('localStorage', ['$rootScope', 'localStorageService', function ($rootScope, localStorageService) {

       var self = this;
        var _username = "";
        var _token = "";

        self.login_check = function () {
            console.log("-----loginCheck");
            var token = localStorageService.get("token");
            var username = localStorageService.get("username");
            if(null !== username && null !== token){
                 _token = token;
                _username = username;
            }else{
                window.location = "./login.html"
            }
        }

        self.setStorage = function(key, value){
            key && value ? localStorageService.set(key,value):false;
        }

        self.getToken = function(){
            return _token;
        }

        self.getUsername = function(){
            return _username;
        }

    }])