/**
 * Created by hy on 16-8-25.
 */

angular.module("service.highcharts", ["highcharts-ng"])
    .service("HighchartService", [function () {

        var self = this;

        Highcharts.setOptions({
            lang: {
                shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                weekdays: ["周日", "星期一", "星期二", "星期三", "星期四", "星期五", "周六"]
            }
        })

        self.temperatureChart = {
            options: {
                chart: {
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: false
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: '°C',
                    dateTimeLabelFormats: {
                        day: '%m-%d日'
                    }
                }
            },

            series: [{
                name: '平均温度',
                data: [[Date.UTC(2016, 8, 26), 25], [Date.UTC(2016, 8, 27), 30], [Date.UTC(2016, 8, 28), 32],
                    [Date.UTC(2016, 8, 29), 28], [Date.UTC(2016, 8, 30), 26], [Date.UTC(2016, 9, 1), 30],
                    [Date.UTC(2016, 9, 2), 26], [Date.UTC(2016, 9, 3), 27], [Date.UTC(2016, 9, 4), 30]],
                zIndex: 1,
                color: "#30e8f9",
                marker: {
                    fillColor: '#e0deed',
                    lineWidth: 2,
                    lineColor: '#30e8f9'
                }
            }, {
                name: '范围',
                data: [[Date.UTC(2016, 8, 26), 21, 31], [Date.UTC(2016, 8, 27), 26, 32], [Date.UTC(2016, 8, 28), 23, 33],
                    [Date.UTC(2016, 8, 29), 25, 30], [Date.UTC(2016, 8, 30), 24, 30], [Date.UTC(2016, 9, 1), 26, 31],
                    [Date.UTC(2016, 9, 2), 26, 30], [Date.UTC(2016, 9, 3), 26, 30], [Date.UTC(2016, 9, 4), 26, 32]],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                color: '#e0deed',
                fillOpacity: 0.3,
                zIndex: 0
            }],

            title: {
                text: ''
            },

            xAxis: {
                type: 'datetime',
                step: 1,
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%d日', this.value);
                    }
                }
            },

            yAxis: {
                title: {text: ""},

                labels: {
                    style: {
                        color: '#fff'
                    },
                    format: '{value} ℃'
                }
            }
        }

        self.windColumnChart = {
            options: {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: true,
                    itemStyle: {
                        'color': '#fff'
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: '次',
                    dateTimeLabelFormats: {
                        month: '%m月'
                    }
                }
            },

            series: [{
                name: '一级风',
                data: [[Date.UTC(2016, 3), 22], [Date.UTC(2016, 4), 32],
                    [Date.UTC(2016, 5), 32], [Date.UTC(2016, 6), 25], [Date.UTC(2016, 7), 21]],
                color: "#88F179",
                pointWidth: 20
            },
                {
                    name: '二级风',
                    data: [[Date.UTC(2016, 3), 21], [Date.UTC(2016, 4), 26], [Date.UTC(2016, 5), 26],
                        [Date.UTC(2016, 6), 25], [Date.UTC(2016, 7), 26]],
                    color: "#FCB472",
                    pointWidth: 20
                },
                {
                    name: '三级风',
                    data: [[Date.UTC(2016, 3), 21], [Date.UTC(2016, 4), 28], [Date.UTC(2016, 5), 23],
                        [Date.UTC(2016, 6), 22], [Date.UTC(2016, 7), 26]],
                    color: "#8085E9",
                    pointWidth: 20
                }],

            title: {
                text: ''
            },

            xAxis: {
                type: 'datetime',
                step: 1,
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%m月', this.value);
                    }
                }
            },

            yAxis: {
                title: {text: ""},

                labels: {
                    style: {
                        color: '#fff'
                    },
                    format: '{value} 次'
                }
            }
        }

        self.precipitationChart = {
            options: {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: false
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: 'mm',
                    dateTimeLabelFormats: {
                        day: '%m-%d日'
                    }
                }
            },

            series: [{
                name: '降水量',
                type: 'line',
                color: "#dddaeb",
                data: [[Date.UTC(2016, 8, 26), 25], [Date.UTC(2016, 8, 27), 30], [Date.UTC(2016, 8, 28), 32],
                    [Date.UTC(2016, 8, 29), 28], [Date.UTC(2016, 8, 30), 26], [Date.UTC(2016, 9, 1), 30],
                    [Date.UTC(2016, 9, 2), 26], [Date.UTC(2016, 9, 3), 27], [Date.UTC(2016, 9, 4), 30]],
            },
                {
                    name: '累积降水量',
                    yAxis: 1,
                    data: [[Date.UTC(2016, 8, 26), 25], [Date.UTC(2016, 8, 27), 30], [Date.UTC(2016, 8, 28), 32],
                        [Date.UTC(2016, 8, 29), 28], [Date.UTC(2016, 8, 30), 26]],
                    color: "#30e8f9",
                    pointWidth: 30
                }],

            title: {
                text: ''
            },

            xAxis: {
                type: 'datetime',
                step: 1,
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%d日', this.value);
                    }
                }
            },

            yAxis: [{
                title: {
                    text: "降水量(mm)",
                    style: {
                        color: '#fff'
                    },
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                }
            },
                {
                    title: {
                        text: "累积降水量(mm)",
                        style: {
                            color: '#fff'
                        },
                    },

                    labels: {
                        style: {
                            color: '#fff'
                        }
                    },
                    opposite: true
                },
            ],
        }

        self.monitorChart = {
            options: {
                chart: {
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: true,
                    itemStyle: {
                        'color': '#fff'
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: 'mm',
                    dateTimeLabelFormats: {
                        day: '%m-%d日'
                    }
                }
            },

            series: [{
                name: '温度',
                color: "#32c3fd",
                data: [[Date.UTC(2016, 8, 26), 25], [Date.UTC(2016, 8, 27), 30], [Date.UTC(2016, 8, 28), 32],
                    [Date.UTC(2016, 8, 29), 28], [Date.UTC(2016, 8, 30), 26], [Date.UTC(2016, 9, 1), 30],
                    [Date.UTC(2016, 9, 2), 26], [Date.UTC(2016, 9, 3), 27], [Date.UTC(2016, 9, 4), 30]],
            },
                {
                    name: '湿度',
                    yAxis: 1,
                    data: [[Date.UTC(2016, 8, 26), 20], [Date.UTC(2016, 8, 27), 26], [Date.UTC(2016, 8, 28), 24],
                        [Date.UTC(2016, 8, 29), 26], [Date.UTC(2016, 8, 30), 28], [Date.UTC(2016, 9, 1), 26],
                        [Date.UTC(2016, 9, 2), 30], [Date.UTC(2016, 9, 3), 28], [Date.UTC(2016, 9, 4), 29]],
                    color: "#90ed7d",
                    pointWidth: 30
                }],

            title: {
                text: ''
            },

            xAxis: {
                type: 'datetime',
                step: 1,
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%d日', this.value);
                    }
                }
            },

            yAxis: [{
                title: {
                    text: "温度(℃)",
                    style: {
                        color: '#fff'
                    },
                },
                labels: {
                    style: {
                        color: '#fff'
                    },

                    format: '{value} ℃'
                },
            },
                {
                    title: {
                        text: "湿度(%)",
                        style: {
                            color: '#fff'
                        },
                    },

                    labels: {
                        style: {
                            color: '#fff'
                        },

                        format: '{value} %RH',
                    },

                    opposite: true
                },
            ],
        }

        self.getNCTDZYanalysisChart = {
            options: {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: true,
                },
                tooltip: {
                   /* shadow: true,
                    valueSuffix: '亩',*/
                    headerFormat: '',
                    pointFormat: '{series.name} : {point.y}亩'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true,
                            //color: '#7cb5ec',
                            formatter: function () {
                                return this.y + '亩'
                            },
                        }
                    }
                },
            },

            series: [{
                name: '云洋',
                data: [68],
                color: "#3FB4C1",
                pointWidth: 660
            }],

            title: {
                text: ''
            },

            xAxis: {
                title: {text: null},
                labels: {
                    enabled: false
                },
            },

            yAxis: {
                title: {text: "统计数量"},
            }

        }

        self.getNZTRPanalysisChart = {
            options: {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: true,
                },
                tooltip: {
                    /* shadow: true,
                     valueSuffix: '亩',*/
                    headerFormat: '',
                    pointFormat: '{series.name} : {point.y}亩'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true,
                            //color: '#7cb5ec',
                           /* formatter: function () {
                                return this.y + '亩'
                            },*/
                        }
                    }
                },
            },

            series: [{
                name: '农资投入',
                data: []
            }],

            title: {
                text: ''
            },

            xAxis: {
                title: {text: null},
                labels: {
                    enabled: false
                },
            },

            yAxis: {
                title: {text: "使用量"},
            }

        }

        self.getXQCLanalysisChart = {
            options: {
                chart: {
                    backgroundColor: 'rgba(0,0,0,0)'
                },

                legend: {
                    enabled: true,
                },
                tooltip: {
                    shadow: true,
                    valueSuffix: 'kg',
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true,
                        }
                    }
                },
            },

            series: [{
                name: '圆黄梨',
                data: [[Date.UTC(2016, 8, 26), 25], [Date.UTC(2016, 8, 27), 30], [Date.UTC(2016, 8, 28), 32],
                    [Date.UTC(2016, 8, 29), 28], [Date.UTC(2016, 8, 30), 26], [Date.UTC(2016, 9, 1), 30],
                    [Date.UTC(2016, 9, 2), 26], [Date.UTC(2016, 9, 3), 27], [Date.UTC(2016, 9, 4), 30]],
                color: "#0A8FC8",
            }, {
                name: '大黄瓜',
                data: [[Date.UTC(2016, 8, 26), 21], [Date.UTC(2016, 8, 27), 26], [Date.UTC(2016, 8, 28), 23],
                    [Date.UTC(2016, 8, 29), 25], [Date.UTC(2016, 8, 30), 24], [Date.UTC(2016, 9, 1), 26],
                    [Date.UTC(2016, 9, 2), 26], [Date.UTC(2016, 9, 3), 26], [Date.UTC(2016, 9, 4), 26]],
                color: '#50B432',
            }],

            title: {
                text: ''
            },

            xAxis: {
                type: 'datetime',
                step: 1,
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%d日', this.value);
                    }
                }
            },

            yAxis: {
                title: {text: "需求产量(kg)"},
            }

        }

        self.getChartOption = function (stype) {
            if ("temperature" == stype) {
                return self.temperatureChart
            }
            if ("windColumnChart" == stype) {
                return self.windColumnChart
            }
            if ("precipitationChart" == stype) {
                return self.precipitationChart
            }
            if ("monitorChart" == stype) {
                return self.monitorChart
            }
            if ("getNCTDZYanalysisChart" == stype) {
                return self.getNCTDZYanalysisChart
            }
            if ("getNZTRPanalysisChart" == stype) {
                return self.getNZTRPanalysisChart
            }
            if ("getXQCLanalysisChart" == stype) {
                return self.getXQCLanalysisChart
            }
        }

    }])