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

def getLinaData(name, birth, gender):  
    driver = webdriver.Chrome(options=option)
    scrapingResult = {
        'company': "라이나",
        'price': 0,
        'contents': []
    }
    # driver.get('https://direct.lina.co.kr/product/insurance-product-cm/productView_P00176')
    # textBox = driver.find_element(By.XPATH,'//*[@id="__layout"]/div/div[3]/div/div[1]/div/div[1]/form/div/div/div[2]/div/div/input')
    # textBox.send_keys(birth)
    # if gender == 1:
    #     femaleBtn = driver.find_element(By.XPATH,'//*[@id="__layout"]/div/div[3]/div/div[1]/div/div[1]/form/div/div/div[3]/div/label[2]')
    #     femaleBtn.click()
    # else:
    #     maleBtn = driver.find_element(By.XPATH,'//*[@id="__layout"]/div/div[3]/div/div[1]/div/div[1]/form/div/div/div[3]/div/label[1]')
    #     maleBtn.click()
    # resultBtn = driver.find_element(By.XPATH,
    #     '//*[@id="__layout"]/div/div[3]/div/div[1]/div/div[2]/button')
    # resultBtn.click()
    # driver.implicitly_wait(3)

    scrapingResult['contents'] = 'test'
    scrapingResult['price'] = 2000
    # htmlResult = driver.find_element(By.XPATH,
    #     '//*[@id="contents"]/div[2]/div[2]/div[2]/div/table/tbody[1]/tr[1]/td[2]/strong').text
    # resultValue = rePlaceData(htmlResult)

    # print(resultValue)

    # scrapingResult['price'] = resultValue
    # driver.implicitly_wait(2)
    # detailBtn = driver.find_element(By.XPATH,'//*[@id="openLayerplanPonA2"]')
    # detailBtn.click()
    # driver.implicitly_wait(2)

    # tableBody = driver.find_element(By.XPATH, '//*[@id="planPonA2"]/div/div[2]/div/div/table[1]').find_element(By.TAG_NAME,'tbody')
    # rows = tableBody.find_elements(By.TAG_NAME,"tr")
    # contentsList = []
    # for index, value in enumerate(rows):
    #     if index != 0:
    #         print(value.find_elements(By.TAG_NAME,'th')[0].text)
    #         contentsList.append(value.find_elements(By.TAG_NAME,'th')[0].text)
    # scrapingResult['contents'] = contentsList
    return scrapingResult
