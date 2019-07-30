import { 
  handleBlankClick,
  handleSelfClick, 
  handleHover, 
  handleSearch,
  scrollToElement,
  checkBackToElement,
  scrollToFooter 
} from '../tool/tools'

module.exports = {
  'hover浮层': function (browser) {
    browser
      .url('http://preview.www.jd.com/2019')
      .waitForElementVisible('body',1000,false,'打开首页')
      .maximizeWindow()
      .pause(1000)
      /* -----------  送货城市-切换城市  ----------- */
      handleHover(browser,'#ttbar-mycity','.dd.dropdown-layer','定位城市hover')
      .useXpath()
      .click('//div[@class="ui-areamini-content-list"]/div[@class="item"]/a[text()="河南"]')
      .assert.containsText('//span[@class="ui-areamini-text"]','河1ß南','定位城市切换')
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
      .url('http://preview.www.jd.com/2019')
      .waitForElementVisible('//body',1000,false,'打开首页')
      .maximizeWindow()
      /* -----------  登录  ----------- */
      handleSelfClick(browser,'//a[@class="link-login"]','passport','http://preview.www.jd.com/2019','点击按钮“登录”')
      /* -----------  注册  ----------- */
      handleSelfClick(browser,'//a[text()="免费注册"]','reg','http://preview.www.jd.com/2019','点击按钮“注册”')
      /* -----------  搜索框     ----------- */
      handleSearch(browser,'//input[@id="key"]','abc','.form > .button','search.jd.com','http://preview.www.jd.com/2019','点击“搜索框”')
      /* -----------  秒杀楼层     ----------- */
      scrollToElement(browser,'#J_seckill')
      handleBlankClick(browser,'//div[@class="seckill-list"]/div[@class="slider"]/div[@class="slider_list"]/div[@class="slider_wrapper"]/a[@data-index="0"]','jd.com','点击“秒杀楼层”')
      /* -----------  发现好货     ----------- */
      scrollToElement(browser,'#J_core1')
      handleBlankClick(browser,'//a[contains(@class,"nice-goods__logo")]','jd','点击“发现好货”')
      /* -----------  领券中心     ----------- */
      scrollToElement(browser,'#J_niceGoods')
      handleBlankClick(browser,'//div[@class="coupon_item coupon_item_1"]','jd','点击“领券中心”')
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