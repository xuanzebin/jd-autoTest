export function handleBlankClick(browser, element, assert, msg = '') {
  return browser.click(element)
  .windowHandles(function (result) {
    const handle = result.value[1]
    browser.switchWindow(handle)
  })
  .waitForElementVisible('//body',1000,false,'打开点击页面')
  .assert.urlContains(assert, msg)
  .windowHandles(function (result) {
    const handle = result.value[0]
    browser.closeWindow().switchWindow(handle)
  })      
}

export function handleSelfClick(browser, element, assert, redirectUrl, msg = '') {
  return browser.click(element)
  .waitForElementVisible('//body',1000,false,'打开点击页面')
  .assert.urlContains(assert, msg)
  .url(redirectUrl)
  .waitForElementVisible('//body',1000,false,'回到首页')
}

export function handleHover(browser, element, layer, msg, pauseTime = 0,) {
  browser.moveToElement(element,2,2)
  if (pauseTime) {
    browser.pause(pauseTime)
  }
  if (layer instanceof Array) {
    layer.forEach((item)=>{
      browser.waitForElementVisible(item,2000,msg)
    })
  } else {
    browser.waitForElementVisible(layer,2000,msg)
  }
  return browser
}

export function handleRecommendClick(browser, element, assert, msg = '') {
  return browser.execute(function(element) {
    document.querySelectorAll(element)[0].click()
  },[element])
  .windowHandles(function (result) {
    const handle = result.value[1]
    browser.switchWindow(handle)
  })
  .waitForElementVisible('//body',1000,false,'打开点击页面')
  .assert.urlContains(assert,msg)
  .windowHandles(function (result) {
    const handle = result.value[0]
    browser.closeWindow().switchWindow(handle)
  })      
}

export function handleSearch(browser, element, value, searchButton, assert, redirectUrl, msg = '') {
  return browser.setValue(element,value)
  .execute(function(searchButton) {
    document.querySelector(searchButton).click()
  },[searchButton])
  .waitForElementVisible('//body',1000,false,'打开搜索页面')
  .assert.urlContains(assert, msg)
  .pause(1000)
  .url(redirectUrl)
  .waitForElementVisible('//body',1000,false,'回到首页')
}

export function scrollToElement(browser,element){
  return browser.execute(function(element) {
    document.querySelector(element).scrollIntoView()
  },[element])
  .pause(1000)
}

export function checkBackToElement(browser,element,assert,msg) {
  return browser.click(element).pause(1000)
  .waitForElementVisible(assert,1000,msg)
}

export function scrollToFooter(browser,refreshTime,pauseTime) {      
  return browser.execute(function scrollToFoot(refreshTime) {
    window.scrollTo(0,document.body.scrollHeight)
    let timer = setInterval(()=>{
      if (document.documentElement.scrollTop+document.documentElement.clientHeight!==document.body.scrollHeight) {
        scrollToFoot(refreshTime)
      } else {
        clearInterval(timer)
      }
    },refreshTime)
  },[refreshTime]).pause(pauseTime)
}