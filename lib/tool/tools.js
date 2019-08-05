"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlankClick = handleBlankClick;
exports.handleSelfClick = handleSelfClick;
exports.handleHover = handleHover;
exports.handleRootClick = handleRootClick;
exports.handleSearch = handleSearch;
exports.scrollToElement = scrollToElement;
exports.checkBackToElement = checkBackToElement;
exports.scrollToFooter = scrollToFooter;

function handleBlankClick(browser, element, assert) {
  var msg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return browser.click(element).windowHandles(function (result) {
    var handle = result.value[1];
    browser.switchWindow(handle);
  }).waitForElementVisible('//body', 1000, false, '打开点击页面').assert.urlContains(assert, msg).windowHandles(function (result) {
    var handle = result.value[0];
    browser.closeWindow().switchWindow(handle);
  });
}

function handleSelfClick(browser, element, assert, redirectUrl) {
  var msg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  return browser.click(element).waitForElementVisible('//body', 1000, false, '打开点击页面').assert.urlContains(assert, msg).url(redirectUrl).waitForElementVisible('//body', 1000, false, '回到首页');
}

function handleHover(browser, element, layer, msg) {
  var pauseTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  browser.moveToElement(element, 2, 2);

  if (pauseTime) {
    browser.pause(pauseTime);
  }

  if (layer instanceof Array) {
    layer.forEach(function (item) {
      browser.waitForElementVisible(item, 2000, msg);
    });
  } else {
    browser.waitForElementVisible(layer, 2000, msg);
  }

  return browser;
}

function handleRootClick(browser, element, assert) {
  var msg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return browser.execute(function (element) {
    document.querySelectorAll(element)[0].click();
  }, [element]).windowHandles(function (result) {
    var handle = result.value[1];
    browser.switchWindow(handle);
  }).waitForElementVisible('//body', 1000, false, '打开点击页面').assert.urlContains(assert, msg).windowHandles(function (result) {
    var handle = result.value[0];
    browser.closeWindow().switchWindow(handle);
  });
}

function handleSearch(browser, element, value, searchButton, assert, redirectUrl) {
  var msg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  return browser.setValue(element, value).execute(function (searchButton) {
    document.querySelector(searchButton).click();
  }, [searchButton]).waitForElementVisible('//body', 1000, false, '打开搜索页面').assert.urlContains(assert, msg).pause(1000).url(redirectUrl).waitForElementVisible('//body', 1000, false, '回到首页');
}

function scrollToElement(browser, element) {
  return browser.execute(function (element) {
    document.querySelector(element).scrollIntoView();
  }, [element]).pause(1000);
}

function checkBackToElement(browser, element, assert, msg) {
  return browser.click(element).pause(1000).waitForElementVisible(assert, 1000, msg);
}

function scrollToFooter(browser, refreshTime, pauseTime) {
  return browser.execute(function scrollToFoot(refreshTime) {
    window.scrollTo(0, document.body.scrollHeight);
    var timer = setInterval(function () {
      if (document.documentElement.scrollTop + document.documentElement.clientHeight !== document.body.scrollHeight) {
        scrollToFoot(refreshTime);
      } else {
        clearInterval(timer);
      }
    }, refreshTime);
  }, [refreshTime]).pause(pauseTime);
}