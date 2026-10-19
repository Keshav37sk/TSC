export class FindCafePage {

    constructor(page) {
        this.page = page;

        this.searchBar = page.locator(
            "//input[@placeholder='Search Cafe by city or zip code']"
        );

        this.orderHereBtn = page
            .getByRole('button', { name: 'Order here' })
            .first();

        this.pickupTab = page.getByText('Pick-up');
        this.deliveryTab = page.getByText('Delivery');
        this.curbsideTab = page.getByText('Curbside');

        this.continueBtn = page.locator(
            "//button[@aria-label='Continue']"
        );
    }

    async selectCafe(cafe) {

        await this.searchBar.fill(cafe.location);

        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.orderHereBtn.click();

        switch (cafe.orderType) {

            case 'Pick-Up':
                await this.continueBtn.click();
                break;

            case 'Delivery':
                await this.deliveryTab.click();
                break;

            case 'Curbside':
                await this.curbsideTab.click();
                break;
        }
    }
}