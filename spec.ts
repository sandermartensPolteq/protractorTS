import { browser } from "protractor";
import { HomePage } from "./pages/HomePage";

describe('test', ()=>{

    let homePage: HomePage;

    beforeAll( async ()=>{
        await browser.get('http://www.angularjs.org');
        homePage = new HomePage();
    })

    it('Check inputfield on homepage', async ()=>{
        await homePage.setName('Sander');
        let nameLabelText = await homePage.getName();
        expect(nameLabelText).toBe('Hello Sander!');
    });

    it('Navigate to tutorial page', async()=>{
        await homePage.clickLearnButton();
        await homePage.clickTutorialButton();
    });
});