/**
 * @module ui/user
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class User
 * @extends Montage
 */
exports.User = Montage.specialize(/** @lends User# */ {
    constructor: {
        value: function User() {
            this.super();
        }
        
        isLoggedIn = true;
    }
});
