'use-strict';

var map, infowindow = new google.maps.InfoWindow();

function initialize() {
	var temp=[];
	map = new google.maps.Map(document.getElementById('map'), {
		center: new google.maps.LatLng(-34.923711, -72.178922),
		zoom: 16,
		scrollwheel: false,
		disableDefaultUI: true,
		mapTypeControlOptions: {
		mapTypeIds : ["roadmap", "osm"],
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "color": "#f3edd6"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#19c0c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
],   
	});
	marker();
}

google.maps.event.addDomListener(window, 'load', initialize);
function postToWall(name, desc) {
    FB.ui({
        method: 'feed',
        link: 'http://tinajasdeiloca.cl/',
        picture: 'http://tinajasdeiloca.cl/img/post.jpg',
        name: name,
        caption: '#soysolidario',
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
		icon: new google.maps.MarkerImage('/img/location.svg', null, null, null, new google.maps.Size(30,45)),
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
		infowindow.setContent('<h4>'+title+'</h4>'+desc+'<p><small>'+dire+'</small></p>'+share/*+label*/);
		infowindow.open(map, this);
	});
}
$('a.picprod').unbind('click').click(function(){
	var photo = $(this).find('img').attr('src');
	var title = $(this).attr('data');
	$('#modal .modal-body').html('<img class="img-responsive" src="'+photo+'" alt="'+title+'" />');
	$('#modal .modal-footer').html('<p>'+title+'</p>');
});

$.ajaxSetup({cache: true});
$.getScript('//connect.facebook.net/es_LA/sdk.js', function() {
  FB.init({
    appId: '1608212939414078',
    xfbml: true,
    version: 'v2.0'
  });
});

