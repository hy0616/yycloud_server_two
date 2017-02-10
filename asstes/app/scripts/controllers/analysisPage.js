/**
 * Created by hy on 16-9-27.
 */


(function () {

    'use strict'

    angular.module('theme.analysis', [])
        .controller('analysisCtr', ['$scope', 'HighchartService', 'timeData', function ($scope, HighchartService, timeData) {

            var self = $scope;

            self.switchLeftNav = "农场土地资源统计";

            self.$on("switchNav", function (e, v) {

                self.switchLeftNav = v;
                self.$apply();
            })

            self.allcheck = true;

            self.getNCTDZYanalysisChart = HighchartService.getChartOption("getNCTDZYanalysisChart");
            self.getNZTRPanalysisChart = HighchartService.getChartOption("getNZTRPanalysisChart");
            self.getXQCLanalysisChart = HighchartService.getChartOption("getXQCLanalysisChart");


            //

            /*-----------------采购合同-------------------*/

            //selsect 共用时间
            self.monthData = timeData.month;
            self.yearData = timeData.year;
            var year_month = timeData.year_month;

            //监测选择时间
            self.selectTime = {
                startYear: "2016",
                startMonth: "1月",
                endYear: "2016",
                endMonth: "12月",

            }


            function getTimeRange() {
                self.timeRange = [];
                var staYear = parseInt(self.selectTime.startYear);
                var staMon = parseInt(self.selectTime.startMonth);
                var endYear = parseInt(self.selectTime.endYear);
                var endMon = parseInt(self.selectTime.endMonth);

                while (staYear <= endYear) {
                    if (staYear === endYear) {
                        while (staMon <= endMon) {
                            self.timeRange.push(staYear + "-" + staMon);
                            staMon++;
                        }
                        staYear++;
                    } else {
                        self.timeRange.push(staYear + "-" + staMon);
                        staMon++;
                        if (staMon > 12) {
                            staMon = 1;
                            staYear++;
                        }
                    }
                }
            }

            getTimeRange();

            // 搜索事件
            self.cghtSearch = function () {
                getTimeRange();
                console.log(self.timeRange);
            }

        }])
})()