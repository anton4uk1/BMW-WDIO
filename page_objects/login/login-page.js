"use strict";
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get UsernameTxt() {return $('[name="username"]');}
    get PasswordTxt() {return $('[name="password"]');}
    get LoginLnk() {return $('div=Log In');}
    get ZipcodeTxt() {return $('#zip-banner__input');}
    get SubmitBtn() {return $('.zip-banner__form.ng-pristine.ng-valid .cta-1');}
    get BuildOwn() {return $('.globalnav-primary__main-links [href="/build-your-own.html"]');}
    get SportsModels() {return $('button=M');}
    get M8GranCoupe() {return $('[href="#/series/M8/gran-coupe"]:nth-child(1)');}
    get M8Competition() {return $('[href="#/studio/208P"]');}
    get DealerName() {return $('.globalnav-primary-location-bar__dealer-name');}
    get BlackSapphire() {return $('[title="Black Sapphire Metallic"]')}
    get BlackSapphireConfirm() {return $('div=Black Sapphire Metallic');}
    get NextWheels() {return $('.button-next.byo-core-type.label-1.theme-core');}
    get DoubleSpoke() {return $('[wheelstyle="810M"]');}
    get DoubleSpokeConfirm() {return $('[class="selected-option-type byo-core-type theme-gkl eyebrow-2"]')}

    // Helper method to avoid code duplication
    login(username, password, zipcode){
        this.UsernameTxt.setValue(username);
        this.PasswordTxt.setValue(password);
        this.LoginLnk.click();
        this.ZipCodeTxt.setValue(zipcode);
        this.SubmitBtn.click();
    }
}
module.exports = Login;

describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
    });
});

