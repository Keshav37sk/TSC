import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { FindCafePage } from '../pages/FindCafePage.js';

import { users } from '../testData/users.js';
import cafes from '../testData/cafes.js';

test('Login and Select Cafe', async ({ page }) => {

    const login = new LoginPage(page);
    const findCafe = new FindCafePage(page);

    await login.login(
        users.validUser.username,
        users.validUser.password
    );

    await findCafe.selectCafe(
        cafes.lab2
    );
});
