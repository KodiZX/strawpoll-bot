# Strawpoll.me bypass (automatic voting)
Script for automatically vote multiply times in the website "strawpoll.me". Easy to use.

How to use it on Windows (for dummies):

1. Download the program GIT if you don't have it. (https://en.wikipedia.org/wiki/Git, https://git-scm.com/downloads)
2. Download node.js if you don't have it. (https://en.wikipedia.org/wiki/Node.js, https://nodejs.org/en/)
3. Download the script¹ https://github.com/HRPsomenumbers/strawpoll-bot/archive/master.zip
4. Place the files (which you have downloaded in the step 3) in a folder.
5. Right click IN THE FOLDER THE SCRIPT IS IN, then press "GIT Bash here".
6. Write "npm i cheerio". Wait for it download, then write "npm i request" ²
7. Get a list of HTTP proxies (you can find them here: https://proxyscrape.com/free-proxy-list)
8. Place them at socks.json ³
9. Edit the lines 15, 16 and 17 in the script to configurate it and then save the file.
10. Write "node index" in GIT (notice you must open git in folder where your script is in).
11. Profit !


¹ source code: https://github.com/HRPsomenumbers/strawpoll-bot/blob/master/index.js

² The script has 2 dependencies: https://www.npmjs.com/package/cheerio, https://www.npmjs.com/package/request

³ In the following format: "[ [ip here], [another one here], [also here], [here too] ]". You can add more if you want (you really should add at least 4000). Also you may want use https://shancarter.github.io/mr-data-converter/ to make things faster.



* Works with IP check
* Do NOT work with CAPTCHA
* You may overload the strawpoll servers so be careful and DO NOT USE HIGH RATIO OF VOTES PER SECOND. 
* You may get the error "read ECONNRESET" sometimes. Just remove the proxy is causing it from socks.json


PROOF THAT IT WORKS : https://www.strawpoll.me/19271268/r

It is a really simple code, I may explain how it works here some day.

Status: CURRENTLY WORKING; 20/01/2020
