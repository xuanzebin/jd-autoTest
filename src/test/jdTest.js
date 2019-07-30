import { 
  handleBlankClick,
  handleSelfClick, 
  handleHover, 
  handleRecommendClick,
  handleSearch,
  scrollToElement,
  checkBackToElement,
  scrollToFooter 
} from '../tool/tools.js'

module.exports = {
  'hover浮层': function (browser) {
    browser
      .url('http://www.jd.com/2019')
      .waitForElementVisible('body',1000,false,'打开首页')
      .maximizeWindow()
      .pause(1000)
      /* -----------  送货城市-切换城市  ----------- */
      handleHover(browser,'#ttbar-mycity','.dd.dropdown-layer','定位城市hover')
      .useXpath()
      .click('//div[@class="ui-areamini-content-list"]/div[@class="item"]/a[text()="河南"]')
      .assert.containsText('//span[@class="ui-areamini-text"]','河南','定位城市切换')
      /* -----------  我的京东  ----------- */
      handleHover(browser,'//div[@class="dt cw-icon"]/a[text()="我的京东"]',['//div[@class="myjdlist"]','//div[@class="myjdlist myjdlist_2"]'],'我的京东hover')
      /* -----------  企业采购  ----------- */
      handleHover(browser,'//div[@class="dt cw-icon"]/a[text()="企业采购"]','//div[@class="dd-inner"]/div[@class="item"]/a[text()="企业购"]','企业采购hover')
      /* -----------  客户服务  ----------- */
      handleHover(browser,'//div[text()="客户服务"]','//div[@class="dd dropdown-layer"]/div[@class="item"]/a[text()="帮助中心"]','帮助中心hover')
      /* -----------  网站导航  ----------- */
      handleHover(browser,'//div[text()="网站导航"]','//div[@class="dd dropdown-layer"]/dl[@class="fore1"]/dd/div/a[text()="京东试用"]','京东试用hover')
      /* -----------  手机京东  ----------- */
      handleHover(browser,'//div[text()="手机京东"]','//div[@id="J_mobile_pop"]','手机京东hover')
      /* -----------  购物车  ----------- */
      handleHover(browser,'//div[@class="cw-icon"]/a[text()="我的购物车"]','//div[@class="dropdown-layer"]/div[@class="cart_pop"]','我的购物车hover')
      /* -----------  购物菜单  ----------- */  
      handleHover(browser,'//li[@class="cate_menu_item" and @data-index="1"]','//div[@id="cate_item1"]','购物菜单hover')
      /* -----------  服务入口  ----------- */  
      .moveToElement('//a[@class="link-login"]',2,2)
      handleHover(browser,'//i[@class="service_ico service_ico_jipiao"]','//div[@id="squares-jipiao"]','服务入口hover')
      /* -----------  排行榜  ----------- */
      scrollToElement(browser,'#J_seckill')
      handleHover(browser,'//div[@class="tab top_tab"]/div[@class="tab_head"]/div[contains(@class,"tab_head_item")][2]','//div[@class="tab top_tab"]/div[@class="tab_body"]/div[contains(@class,"tab_body_item")][2]','排行榜hover')
      .end()
  },
  'click事件': function(browser) {
    browser
      .useXpath()
      .url('http://www.jd.com/2019')
      .waitForElementVisible('//body',1000,false,'打开首页')
      .maximizeWindow()
      /* -----------  登录  ----------- */
      handleSelfClick(browser,'//a[@class="link-login"]','passport','http://www.jd.com/2019','点击按钮“登录”')
      /* -----------  注册  ----------- */
      handleSelfClick(browser,'//a[text()="免费注册"]','reg','http://www.jd.com/2019','点击按钮“注册”')
      /* -----------  我的订单  ----------- */
      handleBlankClick(browser,'//div[@class="dt"]/a[text()="我的订单"]','passport','点击按钮“我的订单”')
      /* -----------  我的京东  ----------- */
      handleBlankClick(browser,'//div[@class="dt cw-icon"]/a[text()="我的京东"]','passport','点击按钮“我的京东”')
      /* -----------  京东会员  ----------- */
      handleBlankClick(browser,'//div[@class="dt"]/a[text()="京东会员"]','passport','点击按钮“京东会员”') 
      /* -----------  企业采购  ----------- */
      handleBlankClick(browser,'//div[@class="dt cw-icon"]/a[text()="企业采购"]','b.jd.com','点击按钮“企业采购”') 
      /* -----------  JOY寻宝  ----------- */
      handleHover(browser,'//div[@class="w"]/div[@class="logo"]','//a[@class="logo_scene logo_scene_animateend logo_scene_withBg "]','JOY寻宝hover',1000)
      handleBlankClick(browser,'//a[@class="logo_scene logo_scene_animateend logo_scene_withBg "]','hellojoy.jd.com','点击“JOY寻宝”')
      /* -----------  首焦   ----------- */
      handleBlankClick(browser,'//li[@class="slider_item focus-slider__item focus-item slider_active"]/a[@class="focus-item__core"]',"jd",'点击“首焦”')  
      /* -----------  今日推荐     ----------- */
      handleRecommendClick(browser,'.recommend-item.fade-in',"jd",'点击“今日推荐”')
      /* -----------  购物菜单栏     ----------- */
      handleBlankClick(browser,'//li[@class="cate_menu_item" and @data-index="1"]/a',"jiadian.jd.com",'点击“购物菜单栏”')
      /* -----------  搜索框     ----------- */
      handleSearch(browser,'//input[@id="key"]','abc','.form > .button','search.jd.com','http://www.jd.com/2019','点击“搜索框”')
      /* -----------  导航入口条     ----------- */
      handleBlankClick(browser,'//ul[@id="navitems-group1"]/li[@class="fore3"]/a[@class="navitems-lk"]','jd.com','点击“导航入口条”')
      /* -----------  热搜     ----------- */
      handleBlankClick(browser,'//div[@id="hotwords"]/a[@data-idx="0"]','jd.com','点击“热搜”')
      /* -----------  我的购物车     ----------- */
      handleBlankClick(browser,'//div[@class="cw-icon"]/a[text()="我的购物车"]','cart.jd.com','点击“我的购物车”')
      /* -----------  秒杀楼层     ----------- */
      scrollToElement(browser,'#J_seckill')
      handleBlankClick(browser,'//div[@class="seckill-list"]/div[@class="slider"]/div[@class="slider_list"]/div[@class="slider_wrapper"]/a[@data-index="0"]','jd.com','点击“秒杀楼层”')
      /* -----------  排行榜     ----------- */
      handleBlankClick(browser,'//div[@class="tab top_tab"]/div[@class="tab_body"]/div[contains(@class,"tab_body_item")][1]/div[@class="top_list"]/div[@class="top_item top_item_1"]','jd','点击“排行榜”')
      /* -----------  品牌闪购     ----------- */
      handleBlankClick(browser,'//div[@class="lightning-buy__container"]/a[contains(@class,"goods-core")]','jd','点击“品牌闪购”')
      /* -----------  发现好货     ----------- */
      scrollToElement(browser,'#J_core1')
      handleBlankClick(browser,'//a[contains(@class,"nice-goods__logo")]','jd','点击“发现好货”')
      /* -----------  领券中心     ----------- */
      scrollToElement(browser,'#J_niceGoods')
      handleBlankClick(browser,'//div[@class="coupon_item coupon_item_1"]','jd','点击“领券中心”')
      /* -----------  逛好店     ----------- */
      handleBlankClick(browser,'//a[contains(@class,"shop-item")][1]','jd','点击“逛好店”')
      /* -----------  发现     ----------- */
      handleBlankClick(browser,'//div[@class="slider_item discover_item slider_active"]','jd','点击“发现”')
      /* -----------  新品首发     ----------- */
      handleBlankClick(browser,'//a[contains(@class,"new_arrival_item new_arrival_item_main")]','jd','点击“新品首发”')
      /* -----------  频道广场     ----------- */
      scrollToElement(browser,'#J_core2')
      handleBlankClick(browser,'//div[contains(@class,"slider_item channels_block channels_block_1")]/div[@class="channels_block_wrapper"]/div[@class="channels_item channels_item_1"]','jd','点击“频道广场”')
      /* -----------  为你推荐     ----------- */
      scrollToElement(browser,'#J_feeds')
      .click('//li[@id="feedTab1"]')
      handleBlankClick(browser,'//ul[@id="feedContent1"]/li[1]','jd','点击“为你推荐”')
      /* -----------  底部     ----------- */
      scrollToFooter(browser,1500,12000)
      handleBlankClick(browser,'//div[@class="mod_help_nav"]/ul[1]/li[1]/a','jd','点击“底部栏”')
      /* -----------  电梯-客服     ----------- */
      handleBlankClick(browser,'//span[@class="elevator_lk_txt" and text()="客服"]','jd','点击“电梯-客服”')
      /* -----------  电梯-反馈     ----------- */
      handleBlankClick(browser,'//span[@class="elevator_lk_txt" and text()="反馈"]','jd','点击“电梯-反馈')
      /* -----------  电梯-频道广场     ----------- */
      checkBackToElement(browser,'//span[@class="elevator_lk_txt" and text()="频道广场"]','//div[@id="J_channels"]','点击“电梯-频道广场')
      /* -----------  电梯-特色优选     ----------- */
      checkBackToElement(browser,'//span[@class="elevator_lk_txt" and text()="特色优选"]','//div[@id="J_spec"]','点击“电梯-特色优选')
      /* -----------  电梯-京东秒杀     ----------- */
      checkBackToElement(browser,'//span[@class="elevator_lk_txt" and text()="京东秒杀"]','//div[@id="J_seckill"]','点击“电梯-京东秒杀”')
      /* -----------  电梯-返回顶部     ----------- */
      checkBackToElement(browser,'//a[@class="elevator_totop"]','//li[@id="J_mobile"]','点击“电梯-回到顶部”')
      .end()
  }
};