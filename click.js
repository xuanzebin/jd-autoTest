export function handleBlankClick(browser,element,assert) {
  return browser.click(element)
  .windowHandles(function (result) {
    const handle = result.value[1]
    browser.switchWindow(handle)
  })
  .waitForElementVisible('//body',1000)
  .assert.urlContains(assert)
  .windowHandles(function (result) {
    const handle = result.value[0]
    browser.closeWindow().switchWindow(handle)
  })      
}

export function handleSelfClick(browser,element,assert,redirectUrl) {
  return browser.click(element)
  .waitForElementVisible('//body',1000)
  .assert.urlContains(assert)
  .url(redirectUrl)
  .waitForElementVisible('//body',1000)
}

export function handleHover(browser,element,layer,pauseTime = 0) {
    browser.moveToElement(element,2,2)
    if (pauseTime) {
      browser.pause(pauseTime)
    }
    if (layer instanceof Array) {
      layer.forEach((item)=>{
        browser.waitForElementVisible(item,1000)
      })
    } else {
      browser.waitForElementVisible(layer,1000)
    }
    return browser
}