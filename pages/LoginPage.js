import config from '../config/env.js';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.accounticon = page.getByRole('button', { name: 'Account' });
        this.signbutton = page.getByRole('button', { name: 'Sign in' });
        this.emailfield = page.locator('#email');
        this.passwordfield = page.locator('#password');
        this.loginbutton = page.locator("//button[normalize-space()='Log in']");
    }

    async gotoHomePage() {
        console.log("URL:", config.baseUrl);
        await this.page.goto(config.baseUrl);
    }

    async clickAccount() {
        await this.accounticon.click();
        await this.signbutton.click();
    }

    async logindata(email, password) {
        await this.emailfield.fill(email);
        await this.passwordfield.fill(password);
        await this.loginbutton.click();
    }

    async login(email, password) {
        await this.gotoHomePage();
        await this.clickAccount();
        await this.logindata(email, password);
    }
}