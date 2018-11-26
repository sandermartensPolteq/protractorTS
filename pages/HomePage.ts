import { ElementFinder, by, element, protractor, promise } from "protractor";

export class HomePage{

    learnButton: ElementFinder = element(by.xpath('//ul[@class="nav"]/li[@class="dropdown"][1]/a[@class="dropdown-toggle"]'));
    tutorialButton: ElementFinder = element(by.xpath('//div[@class="navbar-inner"]/div[@class="container"]/ul[@class="nav"]/li[@class="dropdown open"]/ul[@class="dropdown-menu"]/li[1]/a'));
    nameField: ElementFinder = element(by.model('yourName'));
    nameLabel: ElementFinder = element(by.binding('yourName'));
    EC = protractor.ExpectedConditions;

    async clickLearnButton(){
        await this.EC.presenceOf(this.learnButton);
        this.learnButton.click();
    }

    async clickTutorialButton(){
        await this.EC.presenceOf(this.tutorialButton);
        this.tutorialButton.click();
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