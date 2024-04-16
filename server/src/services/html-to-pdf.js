import puppeteer from "puppeteer";

const defaultOptions = {
  format: "A4",
  printBackground: true,
};

async function htmlToPdf(html, options = defaultOptions) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });
  return await page.pdf(options);
}

export default htmlToPdf;
