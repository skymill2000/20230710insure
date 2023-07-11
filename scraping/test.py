from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.etnews.com/20230710000227')
#/html/body/section/section/article/div[1]/h2

title = driver.find_element(By.XPATH, '/html/body/section/section/article/div[1]/h2')
print(title.text)

titleWithClassName = driver.find_element(By.CLASS_NAME, 'article_title')
print(titleWithClassName.text)

contents = driver.find_element(By.XPATH, '//*[@id="articleBody"]/p')
print(contents.text)