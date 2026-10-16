export class AccountPage{

constructor(page){
    this.joinnowbtn=page.locator("//a[normalize-space()='Join now']");
}

async accountCreation(){
    await this.joinnowbtn.click();



}


}