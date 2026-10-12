export class LoginPage {

    constructor(page) {
        this.page = page;
        this.accounticon = page.getByRole('button', { name: 'Account' });
        this.signbutton = page.getByRole('button', { name: 'Sign in' })
        this.emailfield= page.locator("//input[@id='email']");
        this.passwordfield= page.locator("//input[@id='password']");
        this.loginbutton = page.locator("//button[normalize-space()='Log in']");

    }

    async gotoHomePage() {
        await this.page.goto('https://www.tropicalsmoothiecafe.com/');
    }

    async clickAccount() {
        await this.accounticon.click();
        await this.signbutton.click();
    }

    async logindata(email,password){
       await this.emailfield.fill(email);
       await this.passwordfield.fill(password);
       await this.loginbutton.click();
    }

   


}