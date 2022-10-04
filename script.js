    let h2 = document.querySelector('h2');
    var map;
        
        
    function success(pos){
        console.log(pos.coords.latitude, pos.coords.longitude);
        h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude ${pos.coords.longitude}`;

        if (map === undefined) {
            map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
        }else {
            map.remove();
            map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
        }

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        
    }

    function error(err){
        console.log(err);
    }

    var watchId = navigator.geolocation.watchPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000
    });

//navigator.geolocation.clearWatch(watchId)
