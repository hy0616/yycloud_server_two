/**
 * Created by hy on 16-6-22.
 */

angular.module('theme.homeShareData', [])
    .factory('NavigationData', [function () {
        return {

            MainMenu: [
              /*  {
                    label: '资源',
                    img: 'tools/images/menu_zy.png',
                    child: [

                        {
                            label: '地图',
                            img1: 'tools/images/zy_map.png',
                            img2: 'tools/images/zy_mapTxt.png',
                            url: '#/resource/map'
                        },

                        {
                            label: '信息',
                            img1: 'tools/images/zy_info.png',
                            img2: 'tools/images/zy_infoTxt.png',
                            url: '#/resource/info'
                        }
                    ]
                },*/

                /*{
                    label: '计划',
                    img: 'tools/images/menu_jh.png',
                    child: [

                        {
                            label: '需求',
                            img1: 'tools/images/jh_contract2.png',
                            img2: 'tools/images/jh_contractTxt2.png',
                            url: '#/plan/contract'
                        },

                        {
                            label: '排产',
                            img1: 'tools/images/jh_sked2.png',
                            img2: 'tools/images/jh_skedTxt2.png',
                            url: '#/plan/sked'
                        },
                        {
                            label: '外采',
                            img1: 'tools/images/jh_purchase.png',
                            img2: 'tools/images/jh_purchaseTxt.png',
                            url: '#/plan/purchase'
                        },
                        {
                            label: '缺口',
                            img1: 'tools/images/jh_gap.png',
                            img2: 'tools/images/jh_gapTxt.png',
                            url: '#/plan/gap'
                        }
                    ]
                },*/

                {
                    label: '生产',
                    img: 'tools/images/menu_sc.png',
                    child: [

                        {
                            label: '种植',
                            img1: 'tools/images/sc_plant.png',
                            img2: 'tools/images/sc_plantTxt.png',
                            url: '#/production/plant'
                        },

                        {
                            label: '农事',
                            img1: 'tools/images/sc_farm.png',
                            img2: 'tools/images/sc_farmTxt.png',
                            url: '#/production/farm'
                        },
                        /*{
                            label: '养殖',
                            img1: 'tools/images/sc_yangzhi.png',
                            img2: 'tools/images/sc_yangzhiTxt.png',
                            url: '#/production/breed'
                        },*/
                        {
                            label: '监控',
                            img1: 'tools/images/sc_jianko.png',
                            img2: 'tools/images/sc_jiankoTxt.png',
                            url: '#/production/monitor'
                        },
                        {
                            label: '气象',
                            img1: 'tools/images/sc_weather.png',
                            img2: 'tools/images/sc_weatherTxt.png',
                            url: '#/production/weather'
                        },
                        /*{
                            label: '农资',
                            img1: 'tools/images/sc_nongzi.png',
                            img2: 'tools/images/sc_nongziTxt.png',
                            url: '#/production/nongzi'
                        },*/
                    ]
                },

                {
                    label: '销售',
                    img: 'tools/images/menu_xs.png',
                    child: [

                        {
                            label: '订单',
                            img1: 'tools/images/xs_order.png',
                            img2: 'tools/images/xs_orderTxt.png',
                            url: '#/sale/order'
                        },

                        /*{
                            label: '预售',
                            img1: 'tools/images/xs_yushou.png',
                            img2: 'tools/images/xs_yushouTxt.png',
                            url: '#/sale/yushou'
                        },
                        {
                            label: '价格',
                            img1: 'tools/images/xs_cost.png',
                            img2: 'tools/images/xs_costTxt.png',
                            url: '#/sale/cost'
                        },
                        {
                            label: '供求',
                            img1: 'tools/images/xs_gongying.png',
                            img2: 'tools/images/xs_gongyingTxt.png',
                            url: '#/sale/supply'
                        },*/
                        {
                            label: '农场秀',
                            img1: 'tools/images/xs_ncx.png',
                            img2: 'tools/images/xs_ncxTxt.png',
                            url: '#/sale/ncx'
                        }
                    ]
                },

                {
                    label: '加工',
                    img: 'tools/images/menu_jg.png',
                    child: [

                        {
                            label: '采收',
                            img1: 'tools/images/jg_cs.png',
                            img2: 'tools/images/jg_csTxt.png',
                            url: '#/machining/cs'
                        },

                        {
                            label: '库存',
                            img1: 'tools/images/jg_kucun.png',
                            img2: 'tools/images/jg_kucunTxt.png',
                            url: '#/machining/stock'
                        },
                        /*{
                            label: '品控',
                            img1: 'tools/images/jg_jiance.png',
                            img2: 'tools/images/jg_jianceTxt.png',
                            url: '#/machining/quality'
                        }*/
                    ]
                },

                {
                    label: '履历',
                    img: 'tools/images/menu_lvli.png',
                    url: '#/resume/resume'
                },

                {
                    label: '分析',
                    img: 'tools/images/menu_fx.png',
                    url: '#/analysis/analysis'
                },
                {
                    label: '服务中心',
                    img: 'tools/images/menu_fwzx.png',
                    url: '#/serviceCentre/serviceCentre'
                }

            ]
        }

    }])

    .factory('plantTask', function () {
        return {
            plantTaskData: [
                {
                    img: 'tools/images/1460642819750b8052.png',
                    label: '审核种植计划',
                    total: '共计5条任务',
                    conent: '审核计划种植的内容，是否和实际种植情况相同，如有出入，按实际情况进行修改。完成一个审核任务，赠送1积分。',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/production/plant'
                },
                {
                    img: 'tools/images/14606428198192a82b.png',
                    label: '添加农事记录',
                    total: '共计5条任务',
                    conent: '按农事完成情况，添加农事记录，只有农事图片或投入品用量的，每条赠送1个积分，农事图片和投入品都添加的，' +
                    '每条赠送2个积分，每日5条封顶。使用农事宝添加农事记录会多获得1分。',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/production/farm'
                },
                {
                    img: 'tools/images/14606428198722d8ec.png',
                    label: '记录采收情况',
                    total: '共计10条任务',
                    conent: '按采收情况添加采收记录，每条记录，赠送1积分，每日10条封顶。',
                    schedule: '0/10',
                    integral: '+0',
                    src: '#/machining/cs'
                },
                {
                    img: 'tools/images/1460642819923a2c81.png',
                    label: '记录菜品出入库量',
                    total: '共计5条任务',
                    conent: '记录菜品采收入库情况和销售出库情况，每条出库或入库记录，赠送2积分，每日5条封顶。',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/machining/stock'
                },
                {
                    img: 'tools/images/14606428199854098d.png',
                    label: '销售下单',
                    total: '共计10条任务',
                    conent: '销售下单，打印订单并指导包装，每条记录，赠送2积分，每日10条封顶。',
                    schedule: '0/10',
                    integral: '+0',
                    src: '#/sale/order'
                },
                {
                    img: 'tools/images/14606428200680bd61.png',
                    label: '客户签单确认',
                    total: '共计10条任务',
                    conent: '配送订单客户签收确认。每条签收，赠送1积分，每日10条签收单封顶。',
                    schedule: '0/10',
                    integral: '+0',
                    src: '#/sale/order'
                },
                {
                    img: 'tools/images/146064282015984710.png',
                    label: '添加供应做预售',
                    total: '共计5条任务',
                    conent: '添加供应信息，可以帮助您预售产品，提早拿到订单，解决后顾之忧。每条供应，赠送1积分，每日5条供应封顶。',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/sale/supply'//解决跳转到我的供求
                },
                {
                    img: 'tools/images/1460642820231648af.png',
                    label: '使用追溯履历',
                    total: '共计10条任务',
                    conent: '配送订单客户签收确认。每条签收，赠送1积分，每日10条签收单封顶。',
                    schedule: '0/10',
                    integral: '+0',
                    src: '#/resume/resume'
                },
                {
                    img: 'tools/images/1460642820283c9284.png',
                    label: '互助问答-提问',
                    total: '共计5条任务',
                    conent: '向农场专家提出问题',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/'//todo 暂时跳转到首页
                },
                {
                    img: 'tools/images/1460642820352cc2eb.png',
                    label: '互助问答-解答',
                    total: '共计5条任务',
                    conent: '在农事宝上面解答相关农事问题，赢得积分',
                    schedule: '0/5',
                    integral: '+0',
                    src: '#/'//todo   暂时跳转到首页
                }

            ]
        }
    })

    .factory('integralData', function () {
        return {
            integralData: [
                {
                    label: '绿色防控体系线下指导',
                    img: 'tools/images/1460642805847b6f8b.png',
                    exchange: '1500',
                    marketValue: '￥200.00',
                    second: '绿色防控体系',
                    child: {
                        productId: '0003',
                        expertName: '王美荣',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '主讲农场整体生产体系源头把控方法及处理措施，从而减少病虫害的发生，降低投入，保证100%食品检测达标',
                        number: '5人',
                    }

                },
                {
                    label: '土壤改良线下指导',
                    img: 'tools/images/1460642805929e1e00.png',
                    exchange: '3000',
                    marketValue: '￥500.00',
                    second: '土壤改良',
                    child: {
                        productId: '0004',
                        expertName: '李老师',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '通过土壤检测指标、土质、历年种植施肥情况，来判断土壤肥力高低，来建议配肥品种和数量。',
                        number: '10人',
                    }

                },
                {
                    label: '排产线下指导',
                    img: 'tools/images/14606428060149bdbc.png',
                    exchange: '3000',
                    marketValue: '￥500.00',
                    second: '排产',
                    child: {
                        productId: '0005',
                        expertName: '周世杰',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '根据农场生产现状、往年种植情况及销售情况，生产管理者按照以产定销或者以销定产来安排棚室定植时间、开始采收时间、结束采收时间、整地、育苗、预计产出等数据化。',
                        number: '5人',
                    }

                },
                {
                    label: '蔬菜主要病害及防治药剂介绍线下指导',
                    img: 'tools/images/14606428060575fe2c.png',
                    exchange: '2000',
                    marketValue: '￥300.00',
                    second: '蔬菜主要病害及防治药剂介绍',
                    child: {
                        productId: '0006',
                        expertName: '韩明杰',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '主讲生产上主要的传染性病害、非传染性病害；蔬菜病害防治的保护剂和治疗剂有哪些等',
                        number: '5人',
                    }

                },
                {
                    label: '技术管理服务线下指导',
                    img: 'tools/images/1460642806178c68e9.png',
                    exchange: '2000',
                    marketValue: '￥300.00',
                    second: '技术管理服务',
                    child: {
                        productId: '0007',
                        expertName: '韩明杰',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '针对农场所需的技术管理进行相应的定制服务培训',
                        number: '5人',
                    }

                },
                {
                    label: '现场员工技能培训线下指导',
                    img: 'tools/images/146064280624581178.png',
                    exchange: '2000',
                    marketValue: '￥300.00',
                    second: '现场员工技能培训',
                    child: {
                        productId: '0008',
                        expertName: '王美荣',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '针对农场员工在生产上薄弱环节所需的操作技能进行培训',
                        number: '5人',
                    }

                },
                {
                    label: '现场观摩交流学习线下指导',
                    img: 'tools/images/14606428063062d0be.png',
                    exchange: '3000',
                    marketValue: '￥300.00',
                    second: '现场观摩交流学习',
                    child: {
                        productId: '0009',
                        expertName: '周世杰',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '组织各农场主及主要管理、技术人员到优秀农场观摩学习，交流经验',
                        number: '10人',
                    }

                },
                {
                    label: '定制性技术培训线下指导',
                    img: 'tools/images/146064280637068c0c.JPG',
                    exchange: '4000',
                    marketValue: '￥800.00',
                    second: '定制性技术培训',
                    child: {
                        productId: ' 0010',
                        expertName: '待定',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '针对农场现状急需解决的问题，邀请相应专家进行定制性技术服务',
                        number: '10人',
                    }

                },
                {
                    label: '农场云和农事宝软件功能介绍线下指导',
                    img: 'tools/images/1460642806626b99c5.png',
                    exchange: '700',
                    marketValue: '￥100.00',
                    second: '农场云和农事宝软件功能介绍',
                    child: {
                        productId: '0011',
                        expertName: '周世杰',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '主讲软件定位及各功能模块使用目的',
                        number: '5人',
                    }

                },
                {
                    label: '常见蔬菜采后处理线上咨询/线下指导',
                    img: 'tools/images/14606428066829e95b.png',
                    exchange: '1500',
                    marketValue: '￥200.00',
                    second: '常见蔬菜采后处理',
                    child: {
                        productId: '0012',
                        expertName: '王美荣',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '针对常见蔬菜采后处理关键环节进行讲解',
                        number: '5人',
                    }

                },
                {
                    label: '微生物在农业上的应用线上咨询/线下指导',
                    img: 'tools/images/1460642806741cf2a3.png',
                    exchange: '1200',
                    marketValue: '￥150.00',
                    second: '微生物在农业上的应用',
                    child: {
                        productId: '0013',
                        expertName: '江厚春',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '讲解土壤微生物活动规律，使用好处，并推荐市场上常用的微生物品种及使用方法',
                        number: '5人',
                    }

                },
                {
                    label: '无土栽培在设施农业中的应用线上咨询/线下指导',
                    img: 'tools/images/1460642806880da569.png',
                    exchange: '1500',
                    marketValue: '￥200.00',
                    second: '无土栽培在设施农业中的应用',
                    child: {
                        productId: '0014',
                        expertName: '周世杰/江厚春',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '主讲无土栽培（营养液水培及基质培）的配方设计原理及原料组成、在设施农业的应用现状',
                        number: '5人',
                    }
                },
                {
                    label: '椰糠栽培技术介绍线上咨询/线下指导',
                    img: 'tools/images/146064280693437329.png',
                    exchange: '2000',
                    marketValue: '￥300.00',
                    second: '椰糠栽培技术介绍',
                    child: {
                        productId: '0015',
                        expertName: '江厚春',
                        serviceLocation: '北京市朝阳区通惠河畔创意产业园惠河南街1002-7/或者依农场提供场所',
                        serviceIntroduction: '主讲椰糠栽培作为科技园区中一种新型栽培方式，展示水肥一体化无土栽培体系、优势',
                        number: '5人',
                    }
                }
            ]

        }
    })

    .factory('integralRuleData',[function(){
        return{
            ruleData: [
                {
                    navLabel: '关注公众号',
                    explain: '仅限企业管理员账户,并且每个企业仅限一次',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '关注义田农场帮手并绑定',
                            number: '+20'

                        }
                    ]
                },
                {
                    navLabel: '审核种植计划',
                    explain: '审核种植计划的内容,是否和实际种植情况相同,如有出入,按实际情况进行修改.完成一个审核计划,赠送1积分,每日5个任务封顶.',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '审核种植信息',
                            number: '+1'

                        }
                    ]
                },
                {
                    navLabel: '添加农事记录',
                    explain: '按农事完成情况，添加农事记录。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '系统农事记录(只有农事图片或投入品 )',
                            number: '+1'

                        },
                        {
                            operation: '操作2',
                            operationText: '系统农事记录(有农事图片并且有投入品)',
                            number: '+2'

                        },
                        {
                            operation: '操作3',
                            operationText: '农事宝有农事图片并且有投入品',
                            number: '+4'

                        },
                        {
                            operation: '操作4',
                            operationText: '农事宝有农事图片或有投入品',
                            number: '+2'

                        }
                    ]
                },
                {
                    navLabel: '记录采收情况',
                    explain: '按采收情况添加采收记录。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '采收记录',
                            number: '+1'

                        },
                        {
                            operation: '操作2',
                            operationText: '农事宝采收记录',
                            number: '+1'

                        }
                    ]
                },
                {
                    navLabel: '记录菜品出入库量',
                    explain: '记录菜品采收入库情况和销售出库情况。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '菜品出入库',
                            number: '+2'

                        }
                    ]
                },
                {
                    navLabel: '销售下单',
                    explain: '销售下单，打印订单并指导包装。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '添加订单',
                            number: '+2'

                        }
                    ]
                },
                {
                    navLabel: '客户签单确认',
                    explain: '配送订单客户签收确认。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '确认订单签收',
                            number: '+1'

                        }
                    ]
                },
                {
                    navLabel: '添加供应做预售',
                    explain: '添加供应信息，可以帮助您预售产品，提早拿到订单，解决后顾之忧。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '添加供应信息',
                            number: '+1'

                        }
                    ]
                },
                {
                    navLabel: '使用追溯履历',
                    explain: '给包装好，准备出售的菜品贴上质量追溯标签。',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '对应一个履历或打印一次履历',
                            number: '+1'

                        }
                    ]
                },
                {
                    navLabel: '互助问答-提问',
                    explain: '向农场专家提出问题',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '互助问答-提问',
                            number: '+2'

                        },
                        {
                            operation: '操作2',
                            operationText: '农事宝提问',
                            number: '+3'

                        }
                    ]
                },
                {
                    navLabel: '互助问答-解答',
                    explain: '在农事宝上面解答相关农事问题，赢得积分',
                    child: [
                        {
                            operation: '操作1',
                            operationText: '互助问答-解答',
                            number: '+4'

                        },
                        {
                            operation: '操作2',
                            operationText: '农事宝解答一条提问',
                            number: '+5'

                        }
                    ]
                }
            ]
        }
    }])

    .factory('farmSelect', [function(){
        return{
            varietiesPartData: [
                    {
                        varieties: '苋菜',
                        part: '叶片'
                    },
                    {
                        varieties: '菠菜',
                        part: '花朵'
                    },
                    {
                        varieties: '青花菜(西兰花)',
                        part: '茎部'
                    },
                    {
                        varieties: '花椰菜',
                        part: '根系'
                    },
                    {
                        varieties: '青菜(普通白菜)',
                        part: '幼苗'
                    },
                    {
                        varieties: '芹菜',
                        part: '果实'
                    },
                    {
                        varieties: '菜瓜',
                        part: '全株'
                    }
                   /* '苦瓜','丝瓜','西葫芦(笋瓜)','南瓜(倭瓜)','','黄瓜','苤蓝（球茎甘蓝）','生菜','茼蒿','芥蓝',
                    '萝卜','大白菜','茴香','苦苣（苦菊）','茄子','番茄（西红柿）','韭菜','草莓','西瓜','香菜（芫荽）','辣椒（甜椒）',
                    '冬瓜','芜菁','甜菜根（根菾菜）','辣根','牛蒡','美洲防风'*/
                ]
        }
    }])


    .factory('timeData', [function(){
        return{
            year: ['2016','2017','2018','2019','2020'],
            month: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            year_month: ['2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10',
                '2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09',
                '2017-10','2017-11','2017-12','2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08',
                '2018-09','2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07',
                '2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03','2020-04','2020-05','2020-06',
                '2020-07','2020-08','2020-09','2020-10','2020-11','2016-12',]
        }
    }])