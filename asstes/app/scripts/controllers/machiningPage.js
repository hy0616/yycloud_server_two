/**
 * Created by hy on 16-7-27.
 */

(function(){
    'use strict'

    angular.module('them.machining', [])
        .controller('csCtr', ['$scope', function($scope){

            var self = $scope;

            self.labelNav = '采收记录';
            self.record = function(){
                self.labelNav = '采收记录';
            }

            self.probable = function(){
                self.labelNav = '预采管理';
            }

            self.presell = function(){
                self.labelNav = '预售管理';
            }

            //date Conversion
            self.dateConversion = '今日';
            self.today = function(){
                self.dateConversion = '今日';
            }

            self.tomorrow = function(){
                self.dateConversion = '明日';
            }

            self.history = function(){
                self.dateConversion = '历史';
            }
        }])

        .controller('stockCtr', ['$scope', function($scope){
            var self = $scope;

            self.stockTopNav = '库存管理';
            self.inventory = function(){
                self.stockTopNav = '库存管理';
            }

            self.stale = function(){
                self.stockTopNav = '过期物料';
            }

            self.spring = function(){
                self.stockTopNav = '流水记录';
            }

            self.check = function(){
                self.stockTopNav = '盘点记录';
            }
        }])

})();
