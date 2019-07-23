import { handleBlankClick, handleSelfClick, handleHover } from '../click'

module.exports = {
  'hover浮层': function (browser) {
      /* -----------  送货城市-切换城市  ----------- */
    browser
      .url('http://jd.com')
      .waitForElementVisible('body',1000)
      handleHover(browser,'#ttbar-mycity','.dd.dropdown-layer')
      .useXpath()
      .click('//div[@class="ui-areamini-content-list"]/div[@class="item"]/a[text()="河南"]')
      .assert.containsText('//span[@class="ui-areamini-text"]','河南')
      /* -----------  我的京东  ----------- */
      handleHover(browser,'//div[@class="dt cw-icon"]/a[text()="我的京东"]',['//div[@class="myjdlist"]','//div[@class="myjdlist myjdlist_2"]'])
      /* -----------  企业采购  ----------- */
      handleHover(browser,'//div[@class="dt cw-icon"]/a[text()="企业采购"]','//div[@class="dd-inner"]/div[@class="item"]/a[text()="企业购"]')
      /* -----------  客户服务  ----------- */
      handleHover(browser,'//div[text()="客户服务"]','//div[@class="dd dropdown-layer"]/div[@class="item"]/a[text()="帮助中心"]')
      /* -----------  网站导航  ----------- */
      handleHover(browser,'//div[text()="网站导航"]','//div[@class="dd dropdown-layer"]/dl[@class="fore1"]/dd/div/a[text()="京东试用"]')
      /* -----------  手机京东  ----------- */
      handleHover(browser,'//div[text()="手机京东"]','//div[@id="J_mobile_pop"]')
      /* -----------  购物车  ----------- */
      handleHover(browser,'//div[@class="cw-icon"]/a[text()="我的购物车"]','//div[@class="dropdown-layer"]/div[@class="cart_pop"]')
      /* -----------  购物菜单  ----------- */  
      handleHover(browser,'//li[@class="cate_menu_item" and @data-index="1"]','//div[@id="cate_item1"]')
      /* -----------  服务入口  ----------- */  
      .moveToElement('//a[@class="link-login"]',2,2)
      handleHover(browser,'//i[@class="service_ico service_ico_jipiao"]','//div[@id="squares-jipiao"]')
      .end()
  },
  'click事件': function(browser) {
    browser
      .url('http://jd.com')
      .waitForElementVisible('//body',1000)
      .useXpath()
      /* -----------  登录  ----------- */
      handleSelfClick(browser,'//a[@class="link-login"]','passport','http://jd.com')
      /* -----------  注册  ----------- */
      handleSelfClick(browser,'//a[text()="免费注册"]','reg','http://jd.com')
      /* -----------  我的订单  ----------- */
      handleBlankClick(browser,'//div[@class="dt"]/a[text()="我的订单"]','passport')
      /* -----------  我的京东  ----------- */
      handleBlankClick(browser,'//div[@class="dt cw-icon"]/a[text()="我的京东"]','passport')
      /* -----------  京东会员  ----------- */
      handleBlankClick(browser,'//div[@class="dt"]/a[text()="京东会员"]','passport') 
      /* -----------  企业采购  ----------- */
      handleBlankClick(browser,'//div[@class="dt cw-icon"]/a[text()="企业采购"]','b.jd.com') 
      /* -----------  JOY寻宝  ----------- */
      .click('//a[@class="link-login"]')
      .pause(3000)
      .end()
      // .windowHandles(function (result) {
      //   const handle = result.value[1]
      //   browser.switchWindow(handle)
      // })
      // .useCss()
      // .waitForElementVisible('body',1000)
      // .assert.urlContains('hellojoy.jd.com')
      // .end()    
  }
};