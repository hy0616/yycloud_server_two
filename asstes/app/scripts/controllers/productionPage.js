/**
 * Created by hy on 16-7-21.
 */
(function () {
    'use strict'

    angular.module('theme.production', [])
        .controller('farmCtr', ['$scope', 'farmSelect', function ($scope, farmSelect) {

            var self = $scope;

            self.labelNav = '农事管理';
            self.manage = function () {
                self.labelNav = '农事管理';
            }

            self.disease = function () {
                self.labelNav = '病害防治';
            }

            self.varietiesPart = {
                varieties: '',
                Part: ''
            };

            self.varietiesPartData = farmSelect.varietiesPartData;

        }])

        .controller('plantCtr', ['$scope', function ($scope) {
            var self = $scope;
            self.labelNav = '种植管理';
            self.plantation = function () {
                self.labelNav = '种植管理';
            }

            self.modelBase = function () {
                self.labelNav = '模型库';
            }
        }])

        .controller('weatherCtr', ['$scope', 'HighchartService', function ($scope, HighchartService) {
            var self = $scope;

            //温度日期切换
            self.day_temperature = true;
            self.month_temperature = false;

            self.dayTemperature = function () {
                self.month_temperature = false;
                self.day_temperature = true;
            }
            self.monthTemperature = function () {
                self.month_temperature = true;
                self.day_temperature = false;
            }

            //降水量日期切换
            self.day_precipitation = true;
            self.month_precipitation = false;
            self.dayPrecipitation = function () {
                self.day_precipitation = true;
                self.month_precipitation = false;
            }
            self.monthPrecipitation = function () {
                self.day_precipitation = false;
                self.month_precipitation = true;
            }


            self.getTemperatureChart = HighchartService.getChartOption("temperature");
            self.getwindColumnChart = HighchartService.getChartOption("windColumnChart");
            self.getprecipitationChart = HighchartService.getChartOption("precipitationChart");

            $('#container').highcharts({
                colors: ["#88F179", "#FCB472", "#8085E9"],
                data: {
                    table: 'freq',
                    startRow: 1,
                    endRow: 17,
                    endColumn: 7
                },
                chart: {
                    polar: true,
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                title: {
                    text: ''
                },
                pane: {
                    size: '85%'
                },
                legend: {
                    enabled:false
                },
                credits: {
                    enabled:false//去掉hightcharts.com
                },

                exporting: {
                    enabled:false//去掉菜单
                },
                xAxis: {
                    labels: {
                        style: {
                            color: '#fff'
                        }
                    },
                    tickmarkPlacement: 'on'
                },

                yAxis: {
                    min: 0,
                    endOnTick: false,
                    showLastLabel: true,
                    title: {
                        text: ''
                    },
                    labels: {
                        style: {
                            color: '#fff'
                        },
                        formatter: function () {
                            return this.value + '%';
                        }
                    }
                },

                tooltip: {
                    valueSuffix: '%',
                    followPointer: true
                },

                plotOptions: {
                    series: {
                        stacking: 'normal',
                        shadow: false,
                        groupPadding: 0,
                        pointPlacement: 'on'
                    }
                }
            });


        }])

        .controller('monitorCtr', ['$scope', 'HighchartService', function($scope, HighchartService){
            var self = $scope;

            self.timeObj = {
                day: true,
                week: false,
                month: false,
                year: false

            }
            self.switchTime = function(time){
                self.timeObj[time] = true;
                angular.forEach(self.timeObj, function(value, key){
                    if(key != time){
                        self.timeObj[key] = false;
                    }
                })

            }

            self.monitorChart = HighchartService.getChartOption("monitorChart");
            self.getwindColumnChart = HighchartService.getChartOption("windColumnChart");
            self.getprecipitationChart = HighchartService.getChartOption("precipitationChart");

            //降水量日期切换
            self.day_precipitation = true;
            self.month_precipitation = false;
            self.dayPrecipitation = function () {
                self.day_precipitation = true;
                self.month_precipitation = false;
            }

            self.monthPrecipitation = function () {
                self.day_precipitation = false;
                self.month_precipitation = true;
            }


            $('#container').highcharts({
                colors: ["#88F179", "#FCB472", "#8085E9"],
                data: {
                    table: 'freq',
                    startRow: 1,
                    endRow: 17,
                    endColumn: 7
                },
                chart: {
                    polar: true,
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                title: {
                    text: ''
                },
                pane: {
                    size: '85%'
                },
                legend: {
                    enabled:false
                },
                credits: {
                    enabled:false//去掉hightcharts.com
                },

                exporting: {
                    enabled:false//去掉菜单
                },
                xAxis: {
                    labels: {
                        style: {
                            color: '#fff'
                        }
                    },
                    tickmarkPlacement: 'on'
                },

                yAxis: {
                    min: 0,
                    endOnTick: false,
                    showLastLabel: true,
                    title: {
                        text: ''
                    },
                    labels: {
                        style: {
                            color: '#fff'
                        },
                        formatter: function () {
                            return this.value + '%';
                        }
                    }
                },

                tooltip: {
                    valueSuffix: '%',
                    followPointer: true
                },

                plotOptions: {
                    series: {
                        stacking: 'normal',
                        shadow: false,
                        groupPadding: 0,
                        pointPlacement: 'on'
                    }
                }
            });

        }])
})();