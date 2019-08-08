"use strict";

var _tools = require("../tool/tools.js");

var process = require('process');

var path = process.cwd() + '/test.conf.js';

var test = require(path);

module.exports = {
  'hover浮层': function hover(browser) {
    var hoverList = test.hoverList;
    var currentType = 'css';
    browser.url(test.url).waitForElementVisible('body', 1000, false, test.websiteName).maximizeWindow().pause(1000);
    hoverList.forEach(function (item) {
      var name = item.name,
          leaveFocusElement = item.leaveFocusElement,
          scrollElement = item.scrollElement,
          selector = item.selector,
          targetSelector = item.targetSelector,
          selectorType = item.selectorType;

      if (selectorType !== currentType) {
        currentType = selectorType;

        if (currentType === 'css') {
          browser.useCss();
        } else if (currentType === 'Xpath') {
          browser.useXpath();
        }
      }

      if (leaveFocusElement) {
        browser.moveToElement(leaveFocusElement, 2, 2);
      }

      if (scrollElement) {
        (0, _tools.scrollToElement)(browser, scrollElement);
      }

      (0, _tools.handleHover)(browser, selector, targetSelector, name);
    });
    browser.end();
  },
  'click事件': function click(browser) {
    var clickList = test.clickList;
    var currentType = 'css';
    browser.url(test.url).useCss().waitForElementVisible('body', 1000, false, test.websiteName).maximizeWindow().pause(1000);
    clickList.forEach(function (item) {
      var name = item.name,
          selectorType = item.selectorType,
          selector = item.selector,
          search = item.search,
          target = item.target,
          targetUrl = item.targetUrl,
          targetSelector = item.targetSelector,
          hover = item.hover,
          scrollElement = item.scrollElement,
          scrollFooter = item.scrollFooter;

      if (selectorType !== currentType) {
        currentType = selectorType;

        if (currentType === 'css') {
          browser.useCss();
        } else if (currentType === 'Xpath') {
          browser.useXpath();
        }
      }

      if (scrollElement) {
        (0, _tools.scrollToElement)(browser, scrollElement);
      }

      if (scrollFooter) {
        (0, _tools.scrollToFooter)(browser, 1300, 15000);
      }

      if (selectorType === 'root') {
        (0, _tools.handleRootClick)(browser, selector, targetUrl, name);
        return;
      }

      if (search) {
        (0, _tools.handleSearch)(browser, selector, search.value, search.buttonSelector, targetUrl, test.url, name);
        return;
      }

      if (hover) {
        (0, _tools.handleHover)(browser, hover.selector, hover.targetSelector, hover.name, 1000); //待修正

        (0, _tools.handleBlankClick)(browser, selector, targetUrl, name);
        return;
      }

      if (target === 'self') {
        (0, _tools.handleSelfClick)(browser, selector, targetUrl, test.url, name);
        return;
      }

      if (target === 'element') {
        (0, _tools.checkBackToElement)(browser, selector, targetSelector, name);
        return;
      }

      (0, _tools.handleBlankClick)(browser, selector, targetUrl, name);
    });
    browser.end();
  }
};