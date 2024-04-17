// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('all functions tflower', async function() {
    // Test name: all functions tflower
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://15.206.145.153:8000/")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // 3 | click | linkText=Gallery | 
    await driver.findElement(By.linkText("Gallery")).click()
    // 4 | click | linkText=About us | 
    await driver.findElement(By.linkText("About us")).click()
    // 5 | click | linkText=Contact us | 
    await driver.findElement(By.linkText("Contact us")).click()
    // 6 | click | linkText=Gallery | 
    await driver.findElement(By.linkText("Gallery")).click()
    // 7 | click | id=1 | 
    await driver.findElement(By.id("1")).click()
    // 8 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 9 | click | id=txtquantity | 
    await driver.findElement(By.id("txtquantity")).click()
    // 10 | type | id=txtquantity | 10
    await driver.findElement(By.id("txtquantity")).sendKeys("10")
    // 11 | click | css=td:nth-child(1) > input | 
    await driver.findElement(By.css("td:nth-child(1) > input")).click()
    // 12 | click | css=td:nth-child(3) > input | 
    await driver.findElement(By.css("td:nth-child(3) > input")).click()
    // 13 | click | linkText=Gallery | 
    await driver.findElement(By.linkText("Gallery")).click()
    // 14 | click | id=2 | 
    await driver.findElement(By.id("2")).click()
    // 15 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 16 | click | id=txtquantity | 
    await driver.findElement(By.id("txtquantity")).click()
    // 17 | type | id=txtquantity | 020
    await driver.findElement(By.id("txtquantity")).sendKeys("020")
    // 18 | click | css=td:nth-child(1) > input | 
    await driver.findElement(By.css("td:nth-child(1) > input")).click()
    // 19 | click | linkText=Gallery | 
    await driver.findElement(By.linkText("Gallery")).click()
    // 20 | click | linkText=Gallery | 
    await driver.findElement(By.linkText("Gallery")).click()
    // 21 | click | id=1 | 
    await driver.findElement(By.id("1")).click()
    // 22 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 23 | click | css=td:nth-child(3) > input | 
    await driver.findElement(By.css("td:nth-child(3) > input")).click()
    // 24 | click | linkText=Sign In | 
    await driver.findElement(By.linkText("Sign In")).click()
  })
})
