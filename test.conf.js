module.exports = {
  url: 'http://www.jd.com/2019',
  websiteName:'京东首页',
  hoverList: [
    {
      name: '定位城市hover',
      selector: '#ttbar-mycity',
      selectorType: 'css',
      targetSelector: '.dd.dropdown-layer'
    },
    {
      name: '我的京东hover',
      selector: '//div[@class="dt cw-icon"]/a[text()="我的京东"]',
      selectorType: 'Xpath',
      targetSelector: ['//div[@class="myjdlist"]','//div[@class="myjdlist myjdlist_2"]']
    },
    {
      name: '企业采购hover',
      selectorType: 'Xpath',
      selector: '//div[@class="dt cw-icon"]/a[text()="企业采购"]',
      targetSelector: '//div[@class="dd-inner"]/div[@class="item"]/a[text()="企业购"]'
    },
    {
      name: '客户服务hover',
      selectorType: 'Xpath',
      selector: '//div[text()="客户服务"]',
      targetSelector: '//div[@class="dd dropdown-layer"]/div[@class="item"]/a[text()="帮助中心"]'
    },
    {
      name: '网站导航hover',
      selectorType: 'Xpath',
      selector: '//div[text()="网站导航"]',
      targetSelector: '//div[@class="dd dropdown-layer"]/dl[@class="fore1"]/dd/div/a[text()="京东试用"]'
    },
    {
      name: '手机京东hover',
      selectorType: 'Xpath',
      selector: '//div[text()="手机京东"]',
      targetSelector: '//div[@id="J_mobile_pop"]'
    },
    {
      name: '我的购物车hover',
      selectorType: 'Xpath',
      selector: '//div[@class="cw-icon"]/a[text()="我的购物车"]',
      targetSelector: '//div[@class="dropdown-layer"]/div[@class="cart_pop"]'
    },
    {
      name: '购物菜单hover',
      selectorType: 'Xpath',
      selector: '//li[@class="cate_menu_item" and @data-index="1"]',
      targetSelector: '//div[@id="cate_item1"]'
    },
    {
      name: '服务入口hover',
      selectorType: 'Xpath',
      selector: '//i[@class="service_ico service_ico_jipiao"]',
      targetSelector: '//div[@id="squares-jipiao"]',
      leaveFocusElement: '//a[@class="link-login"]'
    },
    {
      name: '排行榜hover',
      selectorType: 'Xpath',
      selector: '//div[@class="tab top_tab"]/div[@class="tab_head"]/div[contains(@class,"tab_head_item")][2]',
      targetSelector: '//div[@class="tab top_tab"]/div[@class="tab_body"]/div[contains(@class,"tab_body_item")][2]',
      scrollElement: '#J_seckill'
    }
  ],
  clickList: [
    {
      name: '点击按钮“登录”',
      selectorType: 'Xpath',
      selector: '//a[@class="link-login"]',
      targetUrl:'jd',
      target: 'self'
    },
    {
      name: '点击按钮“注册”',
      selectorType: 'Xpath',
      selector: '//a[text()="免费注册"]',
      targetUrl:'jd',
      target: 'self'
    },
    {
      name: '点击按钮“我的订单”',
      selectorType: 'Xpath',
      selector: '//div[@class="dt"]/a[text()="我的订单"]',
      targetUrl: 'jd'
    },
    {
      name: '点击按钮“我的京东”',
      selectorType: 'Xpath',
      selector: '//div[@class="dt cw-icon"]/a[text()="我的京东"]',
      targetUrl: 'jd'
    },
    {
      name: '点击按钮“京东会员”',
      selectorType: 'Xpath',
      selector: '//div[@class="dt"]/a[text()="京东会员"]',
      targetUrl: 'jd'
    },
    {
      name: '点击按钮“企业采购”',
      selectorType: 'Xpath',
      selector: '//div[@class="dt cw-icon"]/a[text()="企业采购"]',
      targetUrl: 'jd'
    },
    {
      name:'点击“JOY寻宝”',
      selectorType: 'Xpath',
      selector: '//div[@class="dt cw-icon"]/a[text()="企业采购"]',
      targetUrl:'jd',
      hover: {
        name: 'JOY寻宝hover',
        selectorType: 'Xpath',
        selector: '//div[@class="w"]/div[@class="logo"]',
        targetSelector: '//a[@class="logo_scene logo_scene_animateend logo_scene_withBg "]'
      }
    },
    {
      name: '点击“首焦”',
      selectorType: 'Xpath',
      selector: '//li[@class="slider_item focus-slider__item focus-item slider_active"]/a[@class="focus-item__core"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“今日推荐”',
      selectorType: 'root',
      selector: '.recommend-item.fade-in',
      targetUrl: 'jd'
    },
    {
      name: '点击“购物菜单栏”',
      selectorType: 'Xpath',
      selector: '//li[@class="cate_menu_item" and @data-index="1"]/a',
      targetUrl: 'jd'
    },
    {
      name: '点击“搜索框”',
      selectorType: 'Xpath',
      selector: '//input[@id="key"]',
      targetUrl: 'jd',
      target: 'self',
      search: {
        value: 'abc',
        buttonSelector: '.form > .button'
      }
    },
    {
      name: '点击“导航入口条”',
      selectorType: 'Xpath',
      selector: '//ul[@id="navitems-group1"]/li[@class="fore3"]/a[@class="navitems-lk"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“热搜”',
      selectorType: 'Xpath',
      selector: '//div[@id="hotwords"]/a[@data-idx="0"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“我的购物车”',
      selectorType: 'Xpath',
      selector: '//div[@class="cw-icon"]/a[text()="我的购物车"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“秒杀楼层”',
      selectorType: 'Xpath',
      selector: '//div[@class="seckill-list"]/div[@class="slider"]/div[@class="slider_list"]/div[@class="slider_wrapper"]/a[@data-index="0"]',
      targetUrl: 'jd',
      scrollElement: '#J_seckill'
    },
    {
      name: '点击“排行榜”',
      selectorType: 'Xpath',
      selector: '//div[@class="tab top_tab"]/div[@class="tab_body"]/div[contains(@class,"tab_body_item")][1]/div[@class="top_list"]/div[@class="top_item top_item_1"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“品牌闪购”',
      selectorType: 'Xpath',
      selector: '//div[@class="lightning-buy__container"]/a[contains(@class,"goods-core")]',
      targetUrl: 'jd'
    },
    {
      name: '点击“发现好货”',
      selectorType: 'Xpath',
      selector: '//a[contains(@class,"nice-goods__logo")]',
      targetUrl: 'jd',
      scrollElement: '#J_core1'
    },
    {
      name: '点击“领券中心”',
      selectorType: 'Xpath',
      selector: '//div[@class="coupon_item coupon_item_1"]',
      targetUrl: 'jd',
      scrollElement: '#J_niceGoods'
    },
    {
      name: '点击“逛好店”',
      selectorType: 'Xpath',
      selector: '//a[contains(@class,"shop-item")][1]',
      targetUrl: 'jd'
    },
    {
      name: '点击“发现”',
      selectorType: 'Xpath',
      selector: '//div[@class="slider_item discover_item slider_active"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“新品首发”',
      selectorType: 'Xpath',
      selector: '//a[contains(@class,"new_arrival_item new_arrival_item_main")]',
      targetUrl: 'jd'
    },
    {
      name: '点击“频道广场”',
      selectorType: 'Xpath',
      selector: '//div[contains(@class,"slider_item channels_block channels_block_1")]/div[@class="channels_block_wrapper"]/div[@class="channels_item channels_item_1"]',
      targetUrl: 'jd',
      scrollElement: '#J_core2'
    },
    {
      name: '点击“为你推荐”', 
      selectorType: 'Xpath',
      selector: '//ul[@id="feedContent0"]/li[1]',
      targetUrl: 'jd',
      scrollElement: '#J_feeds',
    },
    {
      name: '点击“底部栏”',
      selectorType: 'Xpath',
      selector: '//div[@class="mod_help_nav"]/ul[1]/li[1]/a',
      targetUrl: 'jd',
      scrollFooter: true
    },
    {
      name: '点击“电梯-客服”',
      selectorType: 'Xpath',
      selector: '//span[@class="elevator_lk_txt" and text()="客服"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“电梯-反馈”',
      selectorType: 'Xpath',
      selector: '//span[@class="elevator_lk_txt" and text()="反馈"]',
      targetUrl: 'jd'
    },
    {
      name: '点击“电梯-频道广场”',
      selectorType: 'Xpath',
      selector: '//span[@class="elevator_lk_txt" and text()="频道广场"]',
      targetSelector: '//div[@id="J_channels"]',
      target: 'element'
    },
    {
      name: '点击“电梯-特色优选”',
      selectorType: 'Xpath',
      selector: '//span[@class="elevator_lk_txt" and text()="特色优选"]',
      targetSelector: '//div[@id="J_spec"]',
      target: 'element'
    },
    {
      name: '点击“电梯-京东秒杀”',
      selectorType: 'Xpath',
      selector: '//span[@class="elevator_lk_txt" and text()="京东秒杀"]',
      targetSelector: '//div[@id="J_seckill"]',
      target: 'element'
    },
    {
      name: '点击“电梯-回到顶部”',
      selectorType: 'Xpath',
      selector: '//a[@class="elevator_totop"]',
      targetSelector: '//li[@id="J_mobile"]',
      target: 'element'
    }
  ]
}