import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoHomePage();
    await login.clickAccount();
    await login.logindata("lkeshav037@gmail.com","Keshav@0");
});