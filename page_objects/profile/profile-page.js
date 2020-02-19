"use strict";
class Common {
    get SettingsIconLnk() {return $('[aria-label="Options"]');}
    get LogoutLnk() {return $('button=Log Out');}
}
module.exports = Common;