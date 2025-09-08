function initMap() {

    const myLatLng = { lat: 24.15052083005291, lng: 120.65098662269979 }; // 調整為您想要的地圖中心點

    const map = new google.maps.Map(document.getElementById('map'), {
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

    const marker = new google.maps.Marker({
        position: myLatLng, // 將地標放在地圖中心點
        map, // 指定地標要顯示在哪張地圖上 (ES6 簡寫)
        title: "HACHIKUMA", // 滑鼠移到地標上會顯示的文字
        icon: "https://raw.githubusercontent.com/froggie0503/hachikuma/refs/heads/main/img/logo_small.png"
    });

    // 2. 建立一個資訊視窗（簡介）
    const infoWindow = new google.maps.InfoWindow({
        // 資訊視窗的 HTML 內容，可以使用 HTML 標籤排版
        content: `
                    <div class="info-window-content">
                        <h3>HACHIKUMA</h3>
                        <p>這是一家美味的蜂蜜甜點店！</p>
                        <p>營業時間：10:00 - 22:00</p>
                    </div>
                `,
    });

    // 3. 為地標新增點擊事件監聽器
    // 點擊地標時，打開資訊視窗
    marker.addListener("click", () => {
        infoWindow.open({
            anchor: marker, // 綁定在 marker 上
            map,
        });
    });
}