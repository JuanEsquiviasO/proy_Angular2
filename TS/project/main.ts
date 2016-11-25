/// <reference path="../typings/globals/jquery/index.d.ts"/>

import *as $ from 'jquery';

class Interaction{
	constructor(){
		$('#button_1').click( function(){
			console.log('click me');
			$(this).css('color','red');
		})
	}
}

new Interaction();