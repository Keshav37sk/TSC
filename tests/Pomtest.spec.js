import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { MenuPage } from '../pages/MenuPage.js';  


//Login
test('login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoHomePage();
    await login.clickAccount();
    await login.logindata("lkeshav037@gmail.com","Keshav@0");
    
    //Add to cart
    const menu = new MenuPage(page);
    await menu.selectCafe("8719 Avenue D, Brooklyn, NY 11236, USA");
    
});


