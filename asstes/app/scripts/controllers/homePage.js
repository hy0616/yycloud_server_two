/**
 * Created by hy on 16-7-5.
 */

(function(){
    'use strict'

    angular.module('theme.home', [])
        .controller('integralMall', ['$scope', 'integralData', function($scope, integralData){
            var self = $scope;

            self.integralData = integralData.integralData;

            self.secondSwitch = false;
            self.integralContent = 'contentUl';
            self.getContentLi = function(data){
                self.secondSwitch = true;
                self.integralContent = 'contentLi';
                self.contentLi = data;
                console.log("contentLi", self.contentLi);
            }

            self.closeSecond = function(){
                self.secondSwitch = false;
                self.integralContent = 'contentUl';
            }

            self.number = 1;
            self.nuberPlus = function(data){
                self.number += 1;
            }

            self.numberReduce = function(data){
                self.number -= 1;
            }
        }])
        .controller('integralRule', ['$scope', 'integralRuleData', function($scope, integralRuleData){

            var self = $scope;
            self.ruleData = integralRuleData.ruleData;
            self.currentData = self.ruleData[0];
            self.switshNav = function(data){
                self.currentData = data;
            }
        }])
})();