import {ElementFinder, by, element, protractor, promise, browser} from "protractor";

export class HomePage{

    navBar: ElementFinder = element(by.id('navbar-main'));
    navMenu: ElementFinder = element(by.css('ul[class~="nav"]'));
    learnButton: ElementFinder = this.navBar.element(this.navMenu.locator()).all(by.css('li[class~="dropdown"]')).get(0);
    tutorialButton: ElementFinder = this.learnButton.all(by.css('ul[class~="dropdown-menu"]')).get(0);
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
        const elm = this.nameField;
        await browser.wait(this.EC.presenceOf(elm), 5000);
        await elm.sendKeys(name);
    }

    async getName(){
        const elm = this.nameLabel;
        await browser.wait(this.EC.presenceOf(elm), 5000);
        return await elm.getText();
    }


}