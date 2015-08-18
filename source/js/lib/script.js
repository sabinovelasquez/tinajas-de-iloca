'use-strict';

var map, infowindow;


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		scrollwheel: false,
		center: {lat: -34.923711, lng: -72.178922},
		panControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.BOTTOM_CENTER
	    },
	    streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
    	},
		scaleControl: true,
		styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#f3edd6"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#19c0c2"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"on"}]}]

	});
	
	infowindow = new google.maps.InfoWindow()
	marker();
}


function postToWall(name, desc) {
	FB.ui({
		method: 'feed',
		link: 'http://tinajasdeiloca.cl/',
		picture: 'http://tinajasdeiloca.cl/img/post.jpg',
		name: name,
		caption: '#tinajasdeiloca',
		description: desc
	}, function(postResponse) {
		ga('send', 'event', 'Compartir en redes', 'Facebook');
	});
}
function postToTweet(name) {
	$('#tweet').trigger('click');
	var tit = encodeURIComponent(name);
	var url = 'https://twitter.com/intent/tweet?text=' + tit + '&hashtags=tinajasdeiloca&url=http://tinajasdeiloca.cl/';
	share_window = window.open(url, 'Twitter', 'status = 1, left = ' + ($(window).width() / 3) + ', top = 90, height = 350, width = 420, resizable = 0');
	ga('send', 'event', 'Compartir en redes', 'Twitter');
}
function marker(){
	var marker = new google.maps.Marker({
		icon: new google.maps.MarkerImage('http://sabino.cl/clients/tinajasdeiloca/img/location.svg', null, null, null, new google.maps.Size(30,45)),
		position: new google.maps.LatLng(-34.923711, -72.178922),
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP
	});
	var title = 'Tinajas de Iloca';
	var desc='';
	var dire='';
	var share = '<div class="sharepoint"><a class="fb" onClick="postToWall(\''+title+'\', \''+desc+'\')"><i class="fa fa-facebook"></i></a><a class="tw" onClick="postToTweet(\''+title+'\')"><i class="fa fa-twitter"></i></a></div>';

	google.maps.event.addListener(marker, 'click', function() {
		ga('send', 'event', 'Mapa', 'Click en ubicación');
		infowindow.setContent('<h4>'+title+'</h4>'+desc+'<p><small>'+dire+'</small></p>'+share/*+label*/);
		infowindow.open(map, this);
	});
}


function sendTheMail(from, name, phone, quant, datein, dateout) {
	console.log(datein+dateout);
	var msj = '<body style="margin: 0;mso-line-height-rule: exactly;padding: 0;min-width: 100%;background-color: #fbfbfb"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic);body,.wrapper,.emb-editor-canvas{background-color:#fbfbfb}.border{background-color:#e9e9e9}h1{color:#565656}.wrapper h1{}.wrapper h1{font-family:Georgia,serif}h1{}.one-col h1{line-height:44px}.two-col h1{line-height:32px}.three-col h1{line-height:26px}.wrapper .one-col-feature h1{line-height:60px}@media only screen and (max-width: 620px){h1{line-height:44px !important}}h2{color:#555}.wrapper h2{}.wrapper h2{font-family:Georgia,serif}h2{}.one-col h2{line-height:32px}.two-col h2{line-height:26px}.three-col h2{line-height:22px}.wrapper .one-col-feature h2{line-height:52px}@media only screen and (max-width: 620px){h2{line-height:32px !important}}h3{color:#555}.wrapper h3{}.wrapper h3{font-family:Georgia,serif}h3{}.one-col h3{line-height:26px}.two-col h3{line-height:22px}.three-col h3{line-height:20px}.wrapper .one-col-feature h3{line-height:42px}@media only screen and (max-width: 620px){h3{line-height:26px !important}}p,ol,ul{color:#565656}.wrapper p,.wrapper ol,.wrapper ul{}.wrapper p,.wrapper ol,.wrapper ul{font-family:Tahoma,sans-serif}@media only screen and (min-width: 0){.wrapper p,.wrapper ol,.wrapper ul{font-family:Lato,Tahoma,sans-serif !important}}p,ol,ul{}.one-col p,.one-col ol,.one-col ul{line-height:25px;Margin-bottom:25px}.two-col p,.two-col ol,.two-col ul{line-height:22px;Margin-bottom:22px}.three-col p,.three-col ol,.three-col ul{line-height:20px;Margin-bottom:20px}.wrapper .one-col-feature p,.wrapper .one-col-feature ol,.wrapper .one-col-feature ul{line-height:30px}.one-col-feature blockquote p,.one-col-feature blockquote ol,.one-col-feature blockquote ul{line-height:50px}@media only screen and (max-width: 620px){p,ol,ul{line-height:25px!important;Margin-bottom:25px !important}}.image{color:#565656}.image{font-family:Tahoma,sans-serif}@media only screen and (min-width: 0){.image{font-family:Lato,Tahoma,sans-serif !important}}.wrapper a{color:#41637e}.wrapper a:hover{color:#30495c !important}.wrapper .logo div{color:#41637e}.wrapper .logo div{font-family:sans-serif}@media only screen and (min-width: 0){.wrapper .logo div{font-family:Avenir,sans-serif !important}}.wrapper .logo div a{color:#41637e}.wrapper .logo div a:hover{color:#41637e !important}.wrapper .one-col-feature p a,.wrapper .one-col-feature ol a,.wrapper .one-col-feature ul a{border-bottom:1px solid #41637e}.wrapper .one-col-feature p a:hover,.wrapper .one-col-feature ol a:hover,.wrapper .one-col-feature ul a:hover{color:#30495c !important;border-bottom:1px solid #30495c !important}.btn a{}.wrapper .btn a{}.wrapper .btn a{font-family:Tahoma,sans-serif}@media only screen and (min-width: 0){.wrapper .btn a{font-family:Lato,Tahoma,sans-serif !important}}.wrapper .btn a{background-color:#41637e;color:#fff !important;outline-color:#41637e;text-shadow:0 1px 0 #3b5971}.wrapper .btn a:hover{background-color:#3b5971 !important;color:#fff !important;outline-color:#3b5971 !important}.preheader .title,.preheader .webversion,.footer .padded{color:#999}.preheader .title,.preheader .webversion,.footer .padded{font-family:Georgia,serif}.preheader .title a,.preheader .webversion a,.footer .padded a{color:#999}.preheader .title a:hover,.preheader .webversion a:hover,.footer .padded a:hover{color:#737373 !important}.footer .social .divider{color:#e9e9e9}.footer .social .social-text,.footer .social a{color:#999}.wrapper .footer .social .social-text,.wrapper .footer .social a{}.wrapper .footer .social .social-text,.wrapper .footer .social a{font-family:Georgia,serif}.footer .social .social-text,.footer .social a{}.footer .social .social-text,.footer .social a{letter-spacing:0.05em}.footer .social .social-text:hover,.footer .social a:hover{color:#737373 !important}.image .border{background-color:#c8c8c8}.image-frame{background-color:#dadada}.image-background{background-color:#f7f7f7}</style><center class="wrapper" style="display: table;table-layout: fixed;width: 100%;min-width: 620px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #fbfbfb"><table class="gmail" style="border-collapse: collapse;border-spacing: 0;width: 650px;min-width: 650px"><tbody><tr><td style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px">&nbsp;</td></tr></tbody></table><table class="preheader centered" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto"><tbody><tr><td style="padding: 0;vertical-align: top"><table style="border-collapse: collapse;border-spacing: 0;width: 602px"><tbody><tr></tr></tbody></table></td></tr></tbody></table><table class="header centered" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto;width: 602px"><tbody><tr><td class="logo" style="padding: 0;vertical-align: top;mso-line-height-rule: at-least;padding-top: 6px;padding-bottom: 20px"><div class="logo-center" style="font-size: 26px;font-weight: 700;letter-spacing: -0.02em;line-height: 32px;color: #41637e;font-family: sans-serif;text-align: center" align="center" id="emb-email-header"><a style="text-decoration: none;transition: all .2s;color: #41637e" href="http://www.tinajasdeiloca.cl"><img style="border: 0;-ms-interpolation-mode: bicubic;display: block;Margin-left: auto;Margin-right: auto;max-width: 200px" src="http://www.tinajasdeiloca.cl/img/logo.png" alt="Tinajas de iloca" width="200" height="69"></a></div></td></tr></tbody></table><table class="border" style="border-collapse: collapse;border-spacing: 0;font-size: 1px;line-height: 1px;background-color: #e9e9e9;Margin-left: auto;Margin-right: auto" width="602"><tbody><tr><td style="padding: 0;vertical-align: top">​</td></tr></tbody></table><table class="centered" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto"><tbody><tr><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td><td style="padding: 0;vertical-align: top"><table class="one-col" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto;width: 600px;background-color: #ffffff;font-size: 14px;table-layout: fixed" emb-background-style=""><tbody><tr><td class="column" style="padding: 0;vertical-align: top;text-align: left"><div><div class="column-top" style="font-size: 32px;line-height: 32px">&nbsp;</div></div><table class="contents" style="border-collapse: collapse;border-spacing: 0;table-layout: fixed;width: 100%"><tbody><tr><td class="padded" style="padding: 0;vertical-align: top;padding-left: 32px;padding-right: 32px;word-break: break-word;word-wrap: break-word"><h1 style="Margin-top: 0;color: #565656;font-weight: 700;font-size: 36px;Margin-bottom: 18px;font-family: Georgia,serif;line-height: 44px;text-align: center"><span style="color:#0d3e58">Nueva Solicitud</span></h1></td></tr></tbody></table><table class="contents" style="border-collapse: collapse;border-spacing: 0;table-layout: fixed;width: 100%"><tbody><tr><td class="padded" style="padding: 0;vertical-align: top;padding-left: 32px;padding-right: 32px;word-break: break-word;word-wrap: break-word"><table class="divider" style="border-collapse: collapse;border-spacing: 0;width: 100%"><tbody><tr><td class="inner" style="padding: 0;vertical-align: top;padding-bottom: 24px" align="center"><table style="border-collapse: collapse;border-spacing: 0;background-color: #e9e9e9;font-size: 2px;line-height: 2px;width: 60px"><tbody><tr><td style="padding: 0;vertical-align: top">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><div class="column-bottom" style="font-size: 8px;line-height: 8px">&nbsp;</div></td></tr></tbody></table></td><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td></tr></tbody></table><table class="border" style="border-collapse: collapse;border-spacing: 0;font-size: 1px;line-height: 1px;background-color: #e9e9e9;Margin-left: auto;Margin-right: auto" width="602"><tbody><tr class="border" style="font-size: 1px;line-height: 1px;background-color: #e9e9e9;height: 1px"><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td><td style="padding: 0;vertical-align: top;line-height: 1px">​</td><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td></tr></tbody></table><table class="centered" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto">  <tbody><tr><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td><td style="padding: 0;vertical-align: top">  <table class="one-col" style="border-collapse: collapse;border-spacing: 0;Margin-left: auto;Margin-right: auto;width: 600px;background-color: #ffffff;font-size: 14px;table-layout: fixed" emb-background-style=""><tbody><tr><td class="column" style="padding: 0;vertical-align: top;text-align: left"><div><div class="column-top" style="font-size: 32px;line-height: 32px">&nbsp;</div></div><table class="contents" style="border-collapse: collapse;border-spacing: 0;table-layout: fixed;width: 100%"><tbody><tr><td class="padded" style="padding: 0;vertical-align: top;padding-left: 32px;padding-right: 32px;word-break: break-word;word-wrap: break-word"><p style="Margin-top: 0;color: #565656;font-family: Tahoma,sans-serif;font-size: 16px;line-height: 25px;Margin-bottom: 25px"><span style="color:#1f1f1f">Estimado Cliente, hemos recibido su solicitud con los siguientes datos:</span></p><p style="Margin-top: 0;color: #565656;font-family: Tahoma,sans-serif;font-size: 16px;line-height: 25px;Margin-bottom: 25px"><span style="color:#1f1f1f">'+name+' (tel: '+phone+'), solicita una reserva de una cabaña para '+quant+' personas desde el '+datein+' hasta el día '+dateout+'</span><span style="color:#1f1f1f">.</span></p><p style="Margin-top: 0;color: #565656;font-family: Tahoma,sans-serif;font-size: 16px;line-height: 25px;Margin-bottom: 25px"><span style="color:#1f1f1f">Pronto nos pondremos en contacto con Ud.</span></p></td></tr></tbody></table><table class="contents" style="border-collapse: collapse;border-spacing: 0;table-layout: fixed;width: 100%"><tbody><tr><td class="padded" style="padding: 0;vertical-align: top;padding-left: 32px;padding-right: 32px;word-break: break-word;word-wrap: break-word"><table class="divider" style="border-collapse: collapse;border-spacing: 0;width: 100%"><tbody><tr><td class="inner" style="padding: 0;vertical-align: top;padding-bottom: 24px" align="center"><table style="border-collapse: collapse;border-spacing: 0;background-color: #e9e9e9;font-size: 2px;line-height: 2px;width: 60px"><tbody><tr><td style="padding: 0;vertical-align: top">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="contents" style="border-collapse: collapse;border-spacing: 0;table-layout: fixed;width: 100%"><tbody><tr><td class="padded" style="padding: 0;vertical-align: top;padding-left: 32px;padding-right: 32px;word-break: break-word;word-wrap: break-word"><p style="Margin-top: 0;color: #565656;font-family: Tahoma,sans-serif;font-size: 16px;line-height: 25px;Margin-bottom: 24px;text-align: center"><a style="text-decoration: underline;transition: all .2s;color: #41637e" data-emb-href-display="undefined" href="http://www.tinajasdeiloca.cl">www.tinajasdeiloca.cl</a></p></td></tr></tbody></table><div class="column-bottom" style="font-size: 8px;line-height: 8px">&nbsp;</div></td></tr></tbody></table></td><td class="border" style="padding: 0;vertical-align: top;font-size: 1px;line-height: 1px;background-color: #e9e9e9;width: 1px">​</td></tr></tbody></table><table class="border" style="border-collapse: collapse;border-spacing: 0;font-size: 1px;line-height: 1px;background-color: #e9e9e9;Margin-left: auto;Margin-right: auto" width="602"><tbody><tr><td style="padding: 0;vertical-align: top">​</td></tr></tbody></table></center></body>';
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
			'key': '7H5LVpJOpJR69EEWOkaOOA',
			'message': {
				'from_email': 'tinajasdeiloca@gmail.com',
				'to': [
					{
						'email': from,
						'name': name,
						'type': 'to'
					}
				],
				'headers': {
					'Reply-To': 'tinajasdeiloca@gmail.com'
				},
				'bcc_address': 'tinajasdeiloca@gmail.com',
				'autotext': 'true',
				'subject': 'Contacto Tinajas de Iloca',
				'html': msj
			}
		}
	}).done(function(response) {
		var status = response[0].status;
		if(status == 'sent'){
			$('#sendloader h3').text('Envío exitoso. Revise su correo de confirmación');
			$('#sendloader i').fadeOut();
			ga('send', 'event', 'Formulario', 'Envío exitoso');
		}else{
			$('#sendloader h3').text('Error de conexión. Por favor intente nuevamente.');
			$('#sendloader i').fadeOut();
			ga('send', 'event', 'Formulario', 'Envío fallido');
		}
		setTimeout(sendtonormal, 5000);
	});
}
function sendtonormal(){
	$('form').removeClass('sending');
	$('#sendloader').removeClass('active');
	$('#sendloader i').show();
	$('form input').val('');
}
$('a.picprod').unbind('click').click(function(){
	var photo = $(this).find('img').attr('src');
	var title = $(this).attr('data');
	ga('send', 'event', 'Detalle foto', title);
	$('#modal .modal-body').html('<img class="img-responsive" src="'+photo+'" alt="'+title+'" />');
	$('#modal .modal-footer').html('<p>'+title+'</p>');
});
$('#send').click(function(event){
	var email = $('#email').val();
	var name = $('#name').val();
	var phone = $('#phone').val();
	var quant = $('#cantidad').val();
	var datein = $('#datein').val();
	var dateout = $('#dateout').val();
	if( name && phone && quant && email && datein && dateout ){
		event.preventDefault();
		$('form').addClass('sending');
		$('#sendloader h3').text('Enviando datos...');
		$('#sendloader').addClass('active');
		sendTheMail(email, name, phone, quant, datein, dateout);
	}
});

$('footer a').click(function(){
	var href = $(this).attr('href')
	ga('send', 'event', 'Contacto', 'Click en <a>: ' + href );
});

$.ajaxSetup({cache: true});
$.getScript('//connect.facebook.net/es_LA/sdk.js', function() {
	FB.init({
		appId: '465502106957967',
		xfbml: true,
		version: 'v2.0'
	});
});


