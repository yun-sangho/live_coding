const fs = require('fs');

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://upbit.com/home');
  setTimeout(async () => {
    await page
      .evaluate(() => {
        let body = '';
        document.querySelector('.app__btn--1iONf').click();
        console.log('모달 창 끄기!');

        document
          .querySelector('.mainNav')
          .children[0].children[0].children[0].click();
        console.log('거래소 내브 아이템 클릭');

        [
          ...document
            .querySelectorAll('.scrollB')[2]
            .querySelectorAll('.up'),
        ]
          .filter(item => {
            console.log('items in filter', item);
            return item.nodeName === 'TR';
          })
          .forEach(item => {
            body += item.innerText;
          });
        return body;
      })
      .then(async result => {
        fs.writeFileSync('./coinPrice.txt', result);
        await page.screenshot({ path: 'example.png' });
        await browser.close();
      });
  }, 10000);
})();
