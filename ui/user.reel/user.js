/**
 * @module ui/user.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class User
 * @extends Component
 */
exports.User = Component.specialize(/** @lends User# */ {
    constructor: {
        value: function User() {
            this.super();
            this.defineBindings({
                // classList management
                "classList.has('montage-Checkbox--checked')": {
                    "<-": "checked"
                }
            });
        }
    },
    
    _checked: {
        value: false
    },

    /**
     * This property reflect the checked state of the checkbox.
     * @type {boolean}
     * @default false
     */
    checked: {
        set: function(value) {
            this._checked = value;
        },
        get: function() {
            return this._checked;
        }
    }
});
