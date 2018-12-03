import { ElementFinder, by, element, protractor, promise } from "protractor";

export class HomePage{

    learnButton: ElementFinder = element(by.xpath('//ul[@class="nav"]/li[@class="dropdown"][1]/a[@class="dropdown-toggle"]'));
    tutorialButton: ElementFinder = element(by.xpath('//div[@class="navbar-inner"]/div[@class="container"]/ul[@class="nav"]/li[@class="dropdown open"]/ul[@class="dropdown-menu"]/li[1]/a'));
    nameField: ElementFinder = element(by.model('yourName'));
    nameLabel: ElementFinder = element(by.binding('yourName'));
    EC = protractor.ExpectedConditions;

    async clickLearnButton(){
        const elm = this.learnButton;
        await browser.wait(this.EC.elementToBeClickable(elm), 5000);
        await elm.click();
    }

    async clickTutorialButton(){
        const elm = this.tutorialButton;
        await browser.wait(this.EC.elementToBeClickable(elm), 5000);
        await elm.click();
    }

    async setName(name:string){
        await this.EC.presenceOf(this.nameField);
        this.nameField.sendKeys(name);
    }

    async getName(){
        await this.EC.presenceOf(this.nameLabel);
        return this.nameLabel.getText();
    }


}