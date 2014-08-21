'use strict';

var Product = function(options){
	this.name = options.name;
	this.price = options.price;
	this.quantity = options.quantity;
	this.payments = options.payments;
};

Product.prototype.purchase = function(){
	alert('Thank you for purchasing our product!');
	return true;
};