/**
 * @module ui/vwf-portal-model.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class VwfPortalModel
 * @extends Component
 */
exports.VwfPortalModel = Component.specialize(/** @lends VwfPortalModel# */ {
    constructor: {
        value: function VwfPortalModel() {
            this.super();

            user: {
                value: false//{ isLoggedIn: {value: true} }
                /*,
                isAdmin: {
                    value: false
                },
                username: {
                    value: 'Guest'
                }*/
            }
        }
    }
});
