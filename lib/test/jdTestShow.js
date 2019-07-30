"use strict";

var _tools = require("../tool/tools");

module.exports = {
  'hover浮层': function hover(browser) {
    browser.url('http://preview.www.jd.com/2019').waitForElementVisible('body', 1000, false, '打开首页').maximizeWindow().pause(1000);
    /* -----------  送货城市-切换城市  ----------- */

    (0, _tools.handleHover)(browser, '#ttbar-mycity', '.dd.dropdown-layer', '定位城市hover').useXpath().click('//div[@class="ui-areamini-content-list"]/div[@class="item"]/a[text()="河南"]').assert.containsText('//span[@class="ui-areamini-text"]', '河1ß南', '定位城市切换');
    /* -----------  我的京东  ----------- */

    (0, _tools.handleHover)(browser, '//div[@class="dt cw-icon"]/a[text()="我的京东"]', ['//div[@class="myjdlist"]', '//div[@class="myjdlist myjdlist_2"]'], '我的京东hover');
    /* -----------  企业采购  ----------- */

    (0, _tools.handleHover)(browser, '//div[@class="dt cw-icon"]/a[text()="企业采购"]', '//div[@class="dd-inner"]/div[@class="item"]/a[text()="企业购"]', '企业采购hover');
    /* -----------  客户服务  ----------- */

    (0, _tools.handleHover)(browser, '//div[text()="客户服务"]', '//div[@class="dd dropdown-layer"]/div[@class="item"]/a[text()="帮助中心"]', '帮助中心hover');
    /* -----------  网站导航  ----------- */

    (0, _tools.handleHover)(browser, '//div[text()="网站导航"]', '//div[@class="dd dropdown-layer"]/dl[@class="fore1"]/dd/div/a[text()="京东试用"]', '京东试用hover');
    /* -----------  手机京东  ----------- */

    (0, _tools.handleHover)(browser, '//div[text()="手机京东"]', '//div[@id="J_mobile_pop"]', '手机京东hover');
    /* -----------  购物车  ----------- */

    (0, _tools.handleHover)(browser, '//div[@class="cw-icon"]/a[text()="我的购物车"]', '//div[@class="dropdown-layer"]/div[@class="cart_pop"]', '我的购物车hover');
    /* -----------  购物菜单  ----------- */

    (0, _tools.handleHover)(browser, '//li[@class="cate_menu_item" and @data-index="1"]', '//div[@id="cate_item1"]', '购物菜单hover')
    /* -----------  服务入口  ----------- */
    .moveToElement('//a[@class="link-login"]', 2, 2);
    (0, _tools.handleHover)(browser, '//i[@class="service_ico service_ico_jipiao"]', '//div[@id="squares-jipiao"]', '服务入口hover');
    /* -----------  排行榜  ----------- */

    (0, _tools.scrollToElement)(browser, '#J_seckill');
    (0, _tools.handleHover)(browser, '//div[@class="tab top_tab"]/div[@class="tab_head"]/div[contains(@class,"tab_head_item")][2]', '//div[@class="tab top_tab"]/div[@class="tab_body"]/div[contains(@class,"tab_body_item")][2]', '排行榜hover').end();
  },
  'click事件': function click(browser) {
    browser.useXpath().url('http://preview.www.jd.com/2019').waitForElementVisible('//body', 1000, false, '打开首页').maximizeWindow();
    /* -----------  登录  ----------- */

    (0, _tools.handleSelfClick)(browser, '//a[@class="link-login"]', 'passport', 'http://preview.www.jd.com/2019', '点击按钮“登录”');
    /* -----------  注册  ----------- */

    (0, _tools.handleSelfClick)(browser, '//a[text()="免费注册"]', 'reg', 'http://preview.www.jd.com/2019', '点击按钮“注册”');
    /* -----------  搜索框     ----------- */

    (0, _tools.handleSearch)(browser, '//input[@id="key"]', 'abc', '.form > .button', 'search.jd.com', 'http://preview.www.jd.com/2019', '点击“搜索框”');
    /* -----------  秒杀楼层     ----------- */

    (0, _tools.scrollToElement)(browser, '#J_seckill');
    (0, _tools.handleBlankClick)(browser, '//div[@class="seckill-list"]/div[@class="slider"]/div[@class="slider_list"]/div[@class="slider_wrapper"]/a[@data-index="0"]', 'jd.com', '点击“秒杀楼层”');
    /* -----------  发现好货     ----------- */

    (0, _tools.scrollToElement)(browser, '#J_core1');
    (0, _tools.handleBlankClick)(browser, '//a[contains(@class,"nice-goods__logo")]', 'jd', '点击“发现好货”');
    /* -----------  领券中心     ----------- */

    (0, _tools.scrollToElement)(browser, '#J_niceGoods');
    (0, _tools.handleBlankClick)(browser, '//div[@class="coupon_item coupon_item_1"]', 'jd', '点击“领券中心”');
    /* -----------  频道广场     ----------- */

    (0, _tools.scrollToElement)(browser, '#J_core2');
    (0, _tools.handleBlankClick)(browser, '//div[contains(@class,"slider_item channels_block channels_block_1")]/div[@class="channels_block_wrapper"]/div[@class="channels_item channels_item_1"]', 'jd', '点击“频道广场”');
    /* -----------  为你推荐     ----------- */

    (0, _tools.scrollToElement)(browser, '#J_feeds').click('//li[@id="feedTab1"]');
    (0, _tools.handleBlankClick)(browser, '//ul[@id="feedContent1"]/li[1]', 'jd', '点击“为你推荐”');
    /* -----------  底部     ----------- */

    (0, _tools.scrollToFooter)(browser, 1500, 12000);
    (0, _tools.handleBlankClick)(browser, '//div[@class="mod_help_nav"]/ul[1]/li[1]/a', 'jd', '点击“底部栏”');
    /* -----------  电梯-客服     ----------- */

    (0, _tools.handleBlankClick)(browser, '//span[@class="elevator_lk_txt" and text()="客服"]', 'jd', '点击“电梯-客服”');
    /* -----------  电梯-反馈     ----------- */

    (0, _tools.handleBlankClick)(browser, '//span[@class="elevator_lk_txt" and text()="反馈"]', 'jd', '点击“电梯-反馈');
    /* -----------  电梯-频道广场     ----------- */

    (0, _tools.checkBackToElement)(browser, '//span[@class="elevator_lk_txt" and text()="频道广场"]', '//div[@id="J_channels"]', '点击“电梯-频道广场');
    /* -----------  电梯-特色优选     ----------- */

    (0, _tools.checkBackToElement)(browser, '//span[@class="elevator_lk_txt" and text()="特色优选"]', '//div[@id="J_spec"]', '点击“电梯-特色优选');
    /* -----------  电梯-京东秒杀     ----------- */

    (0, _tools.checkBackToElement)(browser, '//span[@class="elevator_lk_txt" and text()="京东秒杀"]', '//div[@id="J_seckill"]', '点击“电梯-京东秒杀”');
    /* -----------  电梯-返回顶部     ----------- */

    (0, _tools.checkBackToElement)(browser, '//a[@class="elevator_totop"]', '//li[@id="J_mobile"]', '点击“电梯-回到顶部”').end();
  }
};