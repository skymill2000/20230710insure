from selenium import webdriver
from selenium.webdriver.common.by import By
import re

option = webdriver.ChromeOptions()
option.add_experimental_option('detach', True)



def rePlaceData(value):
    numbers = re.findall("\d+", value)
    result = ""
    for i in numbers:
        decodedNumber = i
        result += decodedNumber
    return result


def getAIAData(name, birth, gender):
    driver = webdriver.Chrome(options=option)
    scrapingResult = {
        'company': "AIA",
        'price': 0,
        'contents': ""
    }
    driver.implicitly_wait(3)

    driver.get('https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#')
    scrapingResult = {
        'company': "AIA",
        'price': 0,
        'contents': []
    }
    
    #AIA 생명 치과 보험 조회
    textBox = driver.find_element(By.XPATH, '//*[@id="aia644363719"]')
    textBox.send_keys('19'+birth)
    
    if gender == 1:
        femaleBtn = driver.find_element(By.XPATH, '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[1]')
        femaleBtn.click()
    else:
        maleBtn = driver.find_element(By.XPATH, '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[2]')
        maleBtn.click()

    resultBtn = driver.find_element(By.XPATH,'//*[@id="btn806817556"]')
    resultBtn.click()
    driver.implicitly_wait(2)
    price = driver.find_element(By.XPATH, '//*[@id="premium-by-timespan-value"]')
    resultValue = rePlaceData(price.text)
    scrapingResult['price'] = resultValue

    scrapingResult['contents'] = "보장내역..."
    return scrapingResult
