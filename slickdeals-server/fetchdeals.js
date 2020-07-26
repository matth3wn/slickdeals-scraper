const puppeteer = require("puppeteer");

module.exports = async function() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://slickdeals.net/");
  const fireDeals = await page.$$eval(
    "div.gridCategory.removeHidden > ul.dealTiles.gridDeals > li.firedeal > div > div > div > div.itemImageAndName > div > div.imageContainer > img ",
    node => {
      const dealList = [];
      node.forEach((i, j) => {
        dealList.push({
          id: j,
          name: i.getAttribute("title"),
          imagePath: i.getAttribute("data-original")
        });
      });
      return dealList;
    }
  );
  await browser.close();
  return fireDeals;
}

