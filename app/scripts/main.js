'use strict';

(function(){
	var myProduct = new Product({
		'name': 'Ipad Mini Apple 16 Gb Wifi Led 7.9',
		'price': '4799.99',
		'quantity': 1,
		'payments': 12
	});

	var page = {
		elements: {},
		initComponents: function(){
			//CAROUSEL INIT
			$('.otherProductsCarousel').carousel({
				'limitPerPage': 3,
				'pagination': false
			});

			//TABS INIT
			this.elements.tabs = $('.moreInfoTabs').tabs();
			this.elements.tabs.show(2);

			//MODAL INIT
			this.elements.purchaseModal = $('#btnInitPurchase').modal();
		},
		bindModalEvents: function(){
			$('#btnPurchase').on('click', this, function(event){
				var self = event.data;
				myProduct.purchase();
				self.elements.purchaseModal.hide();
			});

			$('#btnCloseModal').on('click', this, function(event){
				var self = event.data;
				self.elements.purchaseModal.hide();
			});
		},
	};

	$(function(){
		page.initComponents();

		$('#cmbQuantity').on('change',function(){
			myProduct.quantity = $(this).val();
		});

		$('#cmbPayments').on('change',function(){
			myProduct.payments = $(this).val();
		});

		$('#btnInitPurchase').on('click', function(){
			var modalHTML = '';
			modalHTML += '<h3>' + myProduct.name + '</h3>';
			modalHTML += '<p><strong>Precio:</strong> <span class="price ch-price">$' + myProduct.price + '</span></p>';
			modalHTML += '<p>Cantidad: ' + myProduct.quantity + '</p>';
			modalHTML += '<p>Cuotas: ' + myProduct.payments + '</p>';
			modalHTML += '<div class="ch-actions"><button class="ch-btn" id="btnPurchase">Lo quiero!</button><a href="#" id="btnCloseModal" role="close">Cancelar</a></div>';

			page.elements.purchaseModal.content(modalHTML);
			page.bindModalEvents();
		});
	});

}());

