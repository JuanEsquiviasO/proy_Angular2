/// <reference path="../typings/globals/jquery/index.d.ts"/>
"use strict";
var $ = require('jquery');
var Interaction = (function () {
    function Interaction() {
        $('#button_1').click(function () {
            console.log('click me');
            $(this).css('color', 'red');
        });
    }
    return Interaction;
}());
new Interaction();
//# sourceMappingURL=main.js.map