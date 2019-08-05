import { 
  handleBlankClick,
  handleSelfClick, 
  handleHover, 
  handleRootClick,
  handleSearch,
  scrollToElement,
  checkBackToElement,
  scrollToFooter 
} from '../tool/tools.js'

const process = require('process')
const path = process.cwd() + '/test.conf.js'
const test = require(path)
module.exports = {
  'hover浮层': function (browser) {
    const hoverList = test.hoverList
    let selectorType = 'css'

    browser
      .url(test.url)
      .waitForElementVisible('body', 1000, false, test.websiteName)
      .maximizeWindow()
      .pause(1000)

    hoverList.forEach((item) => {
      if (item.selectorType !== selectorType) {
        selectorType = item.selectorType
        if (selectorType === 'css') {
          browser.useCss()
        } else if (selectorType === 'Xpath') {
          browser.useXpath()
        }
      }

      if (item.leaveFocusElement) {
        browser.moveToElement(item.leaveFocusElement, 2, 2)
      }
      if (item.scrollElement) {
        scrollToElement(browser, item.scrollElement)
      }

      handleHover(browser, item.selector, item.targetSelector, item.name)
    })
    browser.end()
  },
  'click事件': function(browser) {
    const clickList = test.clickList
    let selectorType = 'css'
    browser
      .url(test.url).useCss()
      .waitForElementVisible('body', 1000, false, test.websiteName)
      .maximizeWindow()
      .pause(1000)
    
    clickList.forEach((item) => {
      if (item.selectorType !== selectorType) {
        selectorType = item.selectorType
        if (selectorType === 'css') {
          browser.useCss()
        } else if (selectorType === 'Xpath') {
          browser.useXpath()
        }
      }

      if (item.scrollElement) {
        scrollToElement(browser, item.scrollElement)
      }
      if (item.scrollToFooter) {
        scrollToFooter(browser,1300,15000)
      }

      if (selectorType === 'root') {
        handleRootClick(browser, item.selector, item.targetUrl, item.name) 
        return 
      }
      if (item.search) {
        handleSearch(browser, item.selector, item.search.value, item.search.buttonSelector, item.targetUrl, test.url,item.name)
        return 
      }

      if (item.hover) {
        handleHover(browser, item.hover.selector, item.hover.targetSelector, item.hover.name, 1000) //待修正
        handleBlankClick(browser, item.selector, item.targetUrl, item.name)
        return 
      }

      if (item.target === 'self') {
        handleSelfClick(browser, item.selector, item.targetUrl, test.url, item.name)
        return 
      } 

      if (item.target === 'element') {
        checkBackToElement(browser,item.selector,item.targetSelector,item.name)
        return 
      }

      handleBlankClick(browser, item.selector, item.targetUrl, item.name)
    })
    browser.end()
  }
};