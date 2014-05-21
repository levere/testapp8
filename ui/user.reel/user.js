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
        }
    },
    
    _isCompleted: {
        value: false
    },

    isCompleted: {
        get: function () {
            return this._isCompleted;
        },
        set: function (value) {
            if (value === this._isCompleted) {
                return;
            }

            /*if (value) {
                this.classList.add('completed');
            } else {
                this.classList.remove('completed');
            }*/

            this._isCompleted = value;
            this.needsDraw = true;
        }
    }
});
