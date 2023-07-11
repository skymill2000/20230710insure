from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
driver = webdriver.Chrome()

driver.get('https://www.eum.go.kr/web/am/amMain.jsp')

#서울특별시 서대문구 북가좌동 일반 456번지 공시 지가를 조회해주세요

sido = Select(driver.find_element(By.NAME, 'selSido'))
sido.select_by_visible_text('세종특별자치시')
driver.implicitly_wait(2)

sigungu = Select(driver.find_element(By.NAME, 'selSgg'))
sigungu.select_by_visible_text('세종시')