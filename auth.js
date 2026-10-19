const { chromium } = require('@playwright/test');
const readline = require('readline');
 
(async () => {
 
    const browser = await chromium.launch({
        headless: false
    });
 
    const context = await browser.newContext();
 
    const page = await context.newPage();
 
    await page.goto(
        'https://stage1.tropicalsmoothiecafe.com/auth/login'
    );
 
    console.log('Complete Cloudflare Access login in the browser.');
 
    // Wait for you to finish login manually
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    await new Promise(resolve => {
        rl.question(
            'After login is completed, press ENTER here...',
            () => {
                rl.close();
                resolve();
            }
        );
    });
 
    // Save authenticated browser state
    await context.storageState({
        path: 'playwright/.auth/cloudflare.json'
    });
 
    console.log('Cloudflare session saved successfully.');
 
    await browser.close();
 
})();