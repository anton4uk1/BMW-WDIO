const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const CommonPage = require('../../page_objects/common/common-page');
const ProfilePage = require('../../page_objects/profile/profile-page');
const BmwPage = require('../../page_objects/login/login-page');
const timeout = 50000;
const zipCode = '90745';
const username = 'uprisedigitalmarketing';
const pass = 'uprisedigital1';

describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage(); 
        this.commonPage = new CommonPage();
        this.profilePage = new ProfilePage();
        this.bmwPage = new BmwPage();
    });
    // This hook runs aftert each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to login', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.UsernameTxt.setValue(username);
        this.loginPage.PasswordTxt.setValue(pass);
        this.loginPage.LoginLnk.click();
        // Wait for nasty modal to show up and click Not now button
        // this.commonPage.disableWelcomePopup();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.commonPage.ProfileIconLnk.waitForDisplayed(timeout, false, 'Profile icon was not displayed');
    });

    it('should be able to logout', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login(username, pass);
        // Click on profile icon
        this.commonPage.ProfileIconLnk.click();
        // Click on settings gear icon
        this.profilePage.SettingsIconLnk.waitForDisplayed(timeout, false, 'Settings gear icon was not displayed');
        this.profilePage.SettingsIconLnk.click();
        // Click on logout icon
        this.profilePage.LogoutLnk.waitForDisplayed(timeout, false, 'Logout icon was not displayed');
        this.profilePage.LogoutLnk.click();
    });

    // This test PASSES
    it('should be able to visit bmw website and enter zipcode', () => {
        browser.url('./')
        // Type in zipcode and click Submit
        this.bmwPage.ZipcodeTxt.waitForDisplayed();
        this.bmwPage.ZipcodeTxt.setValue(zipCode);
        this.bmwPage.SubmitBtn.waitForDisplayed();
        this.bmwPage.SubmitBtn.click();
        this.bmwPage.DealerName.waitForDisplayed();
    });

    // This test PASSES
    it('should be able to select BMW M8 GRAN COUPE and start build', () => {
        browser.url('./')
        // Type in zipcode and click Submit
        this.bmwPage.ZipcodeTxt.waitForDisplayed();
        this.bmwPage.ZipcodeTxt.setValue(zipCode);
        this.bmwPage.SubmitBtn.waitForDisplayed();
        this.bmwPage.SubmitBtn.click();
        this.bmwPage.BuildOwn.waitForDisplayed(timeout, false, 'Build Your Own didn\'t appear');
        this.bmwPage.BuildOwn.click();
        this.bmwPage.SportsModels.waitForDisplayed(timeout, false, 'Cannot select M model');
        this.bmwPage.M8GranCoupe.scrollIntoView();
        this.bmwPage.SportsModels.waitForClickable();
        this.bmwPage.M8GranCoupe.click();
        this.bmwPage.M8Competition.waitForClickable();
    });

    // This test PASSES
    it('should be able to select and start build of the Latest Competition Package and select Black color', () => {
        browser.url('./')
        // Type in zipcode and click Submit
        this.bmwPage.ZipcodeTxt.waitForDisplayed();
        this.bmwPage.ZipcodeTxt.setValue(zipCode);
        this.bmwPage.SubmitBtn.waitForDisplayed();
        this.bmwPage.SubmitBtn.click();
        this.bmwPage.BuildOwn.waitForDisplayed(timeout, false, 'Build Your Own didn\'t appear');
        this.bmwPage.BuildOwn.click();
        this.bmwPage.SportsModels.waitForDisplayed(timeout, false, 'Cannot select M model');
        this.bmwPage.M8GranCoupe.scrollIntoView();
        this.bmwPage.SportsModels.waitForClickable();
        this.bmwPage.M8GranCoupe.click();
        this.bmwPage.M8Competition.waitForClickable();
        this.bmwPage.M8Competition.click();
        this.bmwPage.BlackSapphire.waitForClickable();
        this.bmwPage.BlackSapphire.click()
        this.bmwPage.BlackSapphireConfirm.waitForDisplayed();
    });

    // This test PASSES
    it('should be able to ', () => {
        browser.url('./')
        // Type in zipcode and click Submit
        this.bmwPage.ZipcodeTxt.waitForDisplayed();
        this.bmwPage.ZipcodeTxt.setValue(zipCode);
        this.bmwPage.SubmitBtn.waitForDisplayed();
        this.bmwPage.SubmitBtn.click();
        this.bmwPage.BuildOwn.waitForDisplayed(timeout, false, 'Build Your Own didn\'t appear');
        this.bmwPage.BuildOwn.click();
        this.bmwPage.SportsModels.waitForDisplayed(timeout, false, 'Cannot select M model');
        this.bmwPage.M8GranCoupe.scrollIntoView();
        this.bmwPage.SportsModels.waitForClickable();
        this.bmwPage.M8GranCoupe.click();
        this.bmwPage.M8Competition.waitForClickable();
        this.bmwPage.M8Competition.click();
        this.bmwPage.BlackSapphire.waitForClickable();
        this.bmwPage.BlackSapphire.click()
        this.bmwPage.BlackSapphireConfirm.waitForDisplayed();
        this.bmwPage.NextWheels.click();
        this.bmwPage.DoubleSpoke.waitForClickable();
        this.bmwPage.DoubleSpoke.click();
        this.bmwPage.DoubleSpokeConfirm.waitForDisplayed();
    });
});