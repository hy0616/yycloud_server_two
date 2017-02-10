/**
 * Created by hy on 16-6-23.
 */

'use strict';

angular.module('theme.directives', [])
    .directive('leftNav', [function () {

        return {

            restrict: 'A',
            scope: true,
            link: function (scope, elem, attr) {

                if (scope.item.child != undefined) {

                    $(elem).mouseenter(function () {
                        elem.find("ul").css("display", "block");
                    })

                    $(elem).mouseleave(function () {
                        elem.find("ul").css("display", "none");

                    })
                }
            }
        }
    }])

    .directive('leftSecondNav', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                //$(elem).prepend("aaaaaaaaaaa");

                $(elem).mouseenter(function () {
                    elem.css("background", "url(./tools/images/left_bg_hover2.jpg) repeat-y");
                })

                $(elem).mouseleave(function () {
                    elem.css('background', 'url(./tools/images/leftLevel_bg.png) no-repeat right');

                })
            }
        }
    }])

    .directive('updateNumber', function () {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, elem, attr) {

                var img1 = elem.find('img').eq(0);
                var img2 = elem.find('img').eq(1);
                var input = elem.find('input');
                img1.on('click', function () {
                    var val = $(input).val();
                    if (val < 99) {
                        val++;
                        $(input).val(val);
                    }

                })

                img2.on('click', function () {
                    var val = $(input).val();
                    if (val > 1) {
                        val--;
                        $(input).val(val)
                    }


                })

            }
        }
    })

    .directive('datePicker', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                $('.datetimepicker1').datetimepicker({
                    format: 'YYYY-MM-DD',
                })
            }
        }

    }])

    .directive('farmDatetime', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                $(elem).click(function () {
                    $('.farm_datetimepicker').show();
                })

                $('.farm_datetimepicker button:eq(1)').click(function () {
                    $('.farm_datetimepicker').hide();
                })
            }
        }
    }])

    .directive('btnSwitch', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                elem.children().on('click', function (e) {
                    e.preventDefault();
                    elem.children().removeClass('active');
                    $(this).addClass('active');
                })

            }
        }
    }])

    .directive('ulAllocation', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                var liCount = elem.children('li').length;
                var liWidth = (100 / liCount) + '%';
                elem.children('li').css('width', liWidth);
            }
        }
    }])

    .directive('advancedSearch', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                var visible = false;
                elem.on('click', function () {
                    visible = !visible;
                    if (visible) {
                        $(elem).parent().parent().find('.stock_advancedSearch').fadeIn(500, function () {
                            elem.css("background", "url(./tools/images/gjbottom.jpg) right no-repeat");
                        });
                    } else {
                        $(elem).parent().parent().find('.stock_advancedSearch').fadeOut(500, function () {
                            elem.css("background", "url(./tools/images/gjtop.jpg) right no-repeat");
                        });
                    }
                })
            }
        }
    }])

    .directive('screen', [function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr) {
                var visible = false;
                elem.on('click', function () {
                    visible = !visible;
                    if (visible) {
                        $('.orderContent3').fadeIn(500, function () {
                            elem.css("background", "url(./tools/images/gjbottom.jpg) right no-repeat");
                        });
                    } else {
                        $('.orderContent3').fadeOut(500, function () {
                            elem.css("background", "url(./tools/images/gjtop.jpg) right no-repeat");
                        });
                    }
                })
            }
        }
    }])

    .directive('orderLeftNavActive', [function () {
        return {
            restrict: 'A',
            /*scope: true,*/
            link: function (scope, elem, attr) {
                $(elem.find('li')).eq(0).addClass('oderLeftNavActive');
                $(elem.find('li')).click(function () {
                    $(this).addClass('oderLeftNavActive');
                    $(this).siblings().removeClass('oderLeftNavActive');
                    var orderLeftNav = $(this).find('span').text();
                    scope.$broadcast('orderLeftNavText', orderLeftNav);
                })
            }
        }
    }])

    .directive('orderContentSpanActive', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                $(elem.find('span')).eq(0).addClass('orderContent1SpanActive');
                $(elem.find('span')).click(function () {
                    $(this).addClass('orderContent1SpanActive');
                    $(this).siblings().removeClass('orderContent1SpanActive');
                })
            }
        }
    }])

    .directive('hideFoldBtn', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                $(elem).click(function () {
                    if ($(".monitor_left").css('display') == 'block') {
                        $(".monitor_left").hide();
                        $(".foldBtn").css("left", "0");
                        $(".monitor_right").css({"width": "100%", "margin-left": "0"});
                    } else {
                        $(".monitor_left").show();
                        $(".foldBtn").css("left", "12%");
                        $(".monitor_right").css({"width": "88%", "margin-left": "12%"})
                    }
                })
            }
        }
    })

    .directive('switchAnalysisLeft', ["$rootScope", function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                var ul = $(elem).next("ul");
                $(elem).click(function () {
                    if (ul.css("display") == "block") {
                        ul.hide();
                    } else {
                        ul.show();
                    }
                })

                var li = $(".analysis_left").find("li");

                var h2 = $(".analysis_left h2");
                li.click(function (e) {
                    var text = e.target.innerText;
                    $rootScope.$broadcast("switchNav", text);

                    angular.forEach(li, function (data) {
                        if (data.innerText == text) {
                            var activeH2 = $(data).parent("ul").prev("h2");
                            angular.forEach(h2, function (item) {
                                if (item.innerText != activeH2[0].innerText) {
                                    $(item).next("ul").hide();
                                }
                            })
                            $(data).addClass("analysis_left_li_active");
                        } else {
                            $(data).removeClass("analysis_left_li_active")
                        }
                    })
                })

            }
        }
    }])

    .directive('crktjLiActive', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                var a_label = $(elem).find("span");
                a_label.eq(0).addClass("crkti_li_active");
                a_label.click(function () {
                    $(this).addClass("crkti_li_active");
                    $(this).parent().siblings().find("span").removeClass("crkti_li_active");
                })
            }
        }
    }])

    .directive('cghtLiActive', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {

                var a_label = $(elem).find("span");
                if(scope.$first === true){
                    a_label.addClass("cght_li_active");
                }
                a_label.click(function () {
                    $(this).addClass("cght_li_active");
                    $(this).parent().siblings().find("span").removeClass("cght_li_active");
                })
            }
        }
    }])


