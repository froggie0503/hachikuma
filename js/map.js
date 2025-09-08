function initMap() {

    var myLatLng = { lat: 24.15052083005291, lng: 120.65098662269979 }; // 調整為您想要的地圖中心點

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // 調整為您想要的縮放級別
        center: myLatLng,
        styles: [
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#f49935"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#fad959"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#a1cdfc"
                    },
                    {
                        "saturation": 30
                    },
                    {
                        "lightness": 49
                    }
                ]
            }
        ]
    });

    new google.maps.Marker({
        position: myLatLng, // 將地標放在地圖中心點
        map, // 指定地標要顯示在哪張地圖上 (ES6 簡寫)
        title: "HACHIKUMA", // 滑鼠移到地標上會顯示的文字
        icon:"https://raw.githubusercontent.com/froggie0503/hachikuma/refs/heads/main/img/logo_small.png"
    });
}