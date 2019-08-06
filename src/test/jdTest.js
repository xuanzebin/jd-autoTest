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
    let currentType = 'css'

    browser
      .url(test.url)
      .waitForElementVisible('body', 1000, false, test.websiteName)
      .maximizeWindow()
      .pause(1000)

    hoverList.forEach((item) => {
      let {name, leaveFocusElement, scrollElement, selector, targetSelector, selectorType} = item

      if (selectorType !== currentType) {
        currentType = selectorType
        if (currentType === 'css') {
          browser.useCss()
        } else if (currentType === 'Xpath') {
          browser.useXpath()
        }
      }

      if (leaveFocusElement) {
        browser.moveToElement(leaveFocusElement, 2, 2)
      }
      if (scrollElement) {
        scrollToElement(browser, scrollElement)
      }

      handleHover(browser, selector, targetSelector, name)
    })
    browser.end()
  },
  'click事件': function(browser) {
    const clickList = test.clickList
    let currentType = 'css'
    browser
      .url(test.url).useCss()
      .waitForElementVisible('body', 1000, false, test.websiteName)
      .maximizeWindow()
      .pause(1000)
    
    clickList.forEach((item) => {
      let {name, selectorType, selector, search, target, targetUrl, targetSelector, hover, scrollElement, scrollFooter} = item
      
      if (selectorType !== currentType) {
        currentType = selectorType
        if (currentType === 'css') {
          browser.useCss()
        } else if (currentType === 'Xpath') {
          browser.useXpath()
        }
      }

      if (scrollElement) {
        scrollToElement(browser, scrollElement)
      }
      if (scrollFooter) {
        scrollToFooter(browser,1300,15000)
      }

      if (selectorType === 'root') {
        handleRootClick(browser, selector, targetUrl, name) 
        return 
      }
      if (search) {
        handleSearch(browser, selector, search.value, search.buttonSelector, targetUrl, test.url,name)
        return 
      }

      if (hover) {
        handleHover(browser, hover.selector, hover.targetSelector, hover.name, 1000) //待修正
        handleBlankClick(browser, selector, targetUrl, name)
        return 
      }

      if (target === 'self') {
        handleSelfClick(browser, selector, targetUrl, test.url, name)
        return 
      } 

      if (target === 'element') {
        checkBackToElement(browser,selector,targetSelector,name)
        return 
      }

      handleBlankClick(browser, selector, targetUrl, name)
    })
    browser.end()
  }
};