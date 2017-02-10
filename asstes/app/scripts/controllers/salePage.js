/**
 * Created by hy on 16-8-2.
 */

(function () {
    'use strict'

    angular.module('them.sale', [])
        .controller('orderCtr', ['$rootScope', '$scope', function ($rootScope, $scope) {
            var self = $scope;

            self.orderTopNav = '订单管理';
            self.orderLeftNav = '全部订单';

            self.orderform = function () {
                self.orderTopNav = '订单管理';
            }

            self.clientele = function () {
                self.orderTopNav = '客户管理';
            }

            self.member = function () {
                self.orderTopNav = '会员卡管理';
            }

            self.packet = function () {
                self.orderTopNav = '红包管理';
            }

            self.$on('orderLeftNavText', function (evet, data) {
                self.orderLeftNav = data;
                self.$apply();
            })

        }])

        .controller('supplyCtr', ['$scope', function($scope){
            var self = $scope;

            self.labelNav = '求购信息';

            self.askMessage = function () {
                self.labelNav = '求购信息';
            }

            self.myDemand = function () {
                self.labelNav = '我的供求';
            }
        }])

})();