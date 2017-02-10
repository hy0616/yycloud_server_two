/**
 * Created by hy on 16-6-22.
 */
(function(){
    'use strict';

    angular.module('theme.Navigation', [])
        .controller('NavigationCtr', ['$scope', 'NavigationData', function($scope, NavigationData){

            var self = $scope;
            self.menu = NavigationData.MainMenu;

            self.clickBgimg1 = [];
            self.clickNav = function(item){

                if(item.child == undefined){
                    self.currentLabel = item.label;
                    self.clickBgimg1["label"] = item.label;
                }
            }

            self.clickSecondNav = function(item){

                if(item.child != undefined){
                    self.currentLabel = item.label;
                    self.clickBgimg1["label"] = item.label;
                }
            }

        }])

})();