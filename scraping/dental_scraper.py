from selenium import webdriver
import re


def rePlaceData(value):
    numbers = re.findall("\d+", value)
    result = ""
    for i in numbers:
        decodedNumber = i
        result += decodedNumber
    return result


def getAIAData(name, birth, gender):
    driver = webdriver.Chrome()
    scrapingResult = {
        'company': "AIA",
        'price': 0,
        'contents': ""
    }
    driver.implicitly_wait(3)
    driver.get(
        'https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#')
    driver.implicitly_wait(3)
    return scrapingResult

