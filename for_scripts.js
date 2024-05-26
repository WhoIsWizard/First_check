function toggleLegend() {
    var legend = document.querySelector('.legend');
    var button = document.querySelector('.toggle-button');
    if (legend.style.display === 'none') {
        legend.style.display = 'block';
        button.textContent = 'Hide Legend';
    } else {
        legend.style.display = 'none';
        button.textContent = 'Show Legend';
    }
}

// Инициализация карты (замените этот код на ваш код инициализации карты)
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
}).addTo(map);

// Поиск по карте
document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    geocoder.options.geocoder.geocode(query, function(results) {
        if (results.length > 0) {
            var result = results[0];
            map.fitBounds(result.bbox);
            if (!result.bbox.isValid()) {
                map.setView(result.center, 15);  // Установить центр карты, если bbox невалиден
            }
            L.marker(result.center).addTo(map).bindPopup(result.name).openPopup();
        } else {
            alert('Location not found');
        }
    });
});


