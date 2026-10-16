export class MenuPage {

constructor(page){
    this.page=page;
    this.findacafe=page.locator("//span[normalize-space()='Find a Cafe']");
    this.searchbar= page.locator("//input[@placeholder='Search Cafe by city or zip code']");
    this.searchicon=page.locator("//img[@alt='Search icon']");
    this.orderbtn=page.locator("//div[@data-store-id='6a3189e54d20daf8772a5af5']//button[contains(.,'Schedule Order') or contains(.,'Order here')]");
    this.deliverytype=page.locator("//button[@aria-label='Delivery']");
    this.continuebtn=page.locator("//button[@aria-label='Continue']");
}

async selectCafe(cafedetails, ordertype){
    await this.findacafe.click();
    await this.searchbar.fill(cafedetails);
    await this.searchbar.press('Enter');
    await this.orderbtn.click();

    if(ordertype.includes('Pick-Up')){
        await this.continuebtn.click();
    }
} 






}