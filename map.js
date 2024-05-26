const data = [
    {
      "region": "Vinnytsia Oblast",
      "lat": 49.2331,
      "lng": 28.4682,
      "Year": 2019,
      "agri_spec_grp": "24.50%",
      "mining_spec_grp": "1.20%",
      "posl_spec_grp": "15.80%",
      "industry_spec_grp": "17.00%",
      "other_spec_grp": "41.50%",
      "GRP": 129097
    },
    {
      "region": "Volyn Oblast",
      "lat": 50.7472,
      "lng": 25.3254,
      "Year": 2019,
      "agri_spec_grp": "13.90%",
      "mining_spec_grp": "0.10%",
      "posl_spec_grp": "13.00%",
      "industry_spec_grp": "13.10%",
      "other_spec_grp": "59.90%",
      "GRP": 75620
    },
    {
      "region": "Dnipropetrovsk Oblast",
      "lat": 48.4647,
      "lng": 35.0462,
      "Year": 2019,
      "agri_spec_grp": "6.70%",
      "mining_spec_grp": "20.70%",
      "posl_spec_grp": "20.00%",
      "industry_spec_grp": "40.70%",
      "other_spec_grp": "11.90%",
      "GRP": 390342
    },
    {
      "region": "Donetsk Oblast",
      "lat": 48.0159,
      "lng": 37.8029,
      "Year": 2019,
      "agri_spec_grp": "6.20%",
      "mining_spec_grp": "21.60%",
      "posl_spec_grp": "23.40%",
      "industry_spec_grp": "45.00%",
      "other_spec_grp": "3.80%",
      "GRP": 204893
    },
    {
      "region": "Zhytomyr Oblast",
      "lat": 50.2547,
      "lng": 28.6587,
      "Year": 2019,
      "agri_spec_grp": "20.60%",
      "mining_spec_grp": "4.70%",
      "posl_spec_grp": "11.50%",
      "industry_spec_grp": "16.20%",
      "other_spec_grp": "47.00%",
      "GRP": 85267
    },
    {
      "region": "Zakarpattia Oblast",
      "lat": 48.6208,
      "lng": 22.2879,
      "Year": 2019,
      "agri_spec_grp": "13.90%",
      "mining_spec_grp": "0.60%",
      "posl_spec_grp": "9.10%",
      "industry_spec_grp": "9.70%",
      "other_spec_grp": "66.70%",
      "GRP": 61325
    },
    {
      "region": "Zaporizhzhia Oblast",
      "lat": 47.8388,
      "lng": 35.1396,
      "Year": 2019,
      "agri_spec_grp": "10.20%",
      "mining_spec_grp": "3.00%",
      "posl_spec_grp": "26.40%",
      "industry_spec_grp": "29.40%",
      "other_spec_grp": "31.00%",
      "GRP": 155158
    },
    {
      "region": "Ivano-Frankivsk Oblast",
      "lat": 48.9226,
      "lng": 24.7111,
      "Year": 2019,
      "agri_spec_grp": "12.40%",
      "mining_spec_grp": "8.60%",
      "posl_spec_grp": "12.70%",
      "industry_spec_grp": "21.30%",
      "other_spec_grp": "45.00%",
      "GRP": 86679
    },
    {
      "region": "Kyiv Oblast",
      "lat": 50.4501,
      "lng": 30.5234,
      "Year": 2019,
      "agri_spec_grp": "12.00%",
      "mining_spec_grp": "0.40%",
      "posl_spec_grp": "20.30%",
      "industry_spec_grp": "25.60%",
      "other_spec_grp": "41.70%",
      "GRP": 104452
    },
    {
      "region": "Kirovohrad Oblast",
      "lat": 48.5079,
      "lng": 32.2623,
      "Year": 2019,
      "agri_spec_grp": "29.20%",
      "mining_spec_grp": "5.10%",
      "posl_spec_grp": "11.00%",
      "industry_spec_grp": "16.10%",
      "other_spec_grp": "38.60%",
      "GRP": 73066
    },
    {
      "region": "Luhansk Oblast",
      "lat": 48.574,
      "lng": 39.3078,
      "Year": 2019,
      "agri_spec_grp": "19.60%",
      "mining_spec_grp": "1.90%",
      "posl_spec_grp": "9.40%",
      "industry_spec_grp": "11.30%",
      "other_spec_grp": "57.80%",
      "GRP": 40291
    },
    {
      "region": "Lviv Oblast",
      "lat": 49.8397,
      "lng": 24.0297,
      "Year": 2019,
      "agri_spec_grp": "8.00%",
      "mining_spec_grp": "5.50%",
      "posl_spec_grp": "11.50%",
      "industry_spec_grp": "17.00%",
      "other_spec_grp": "58.00%",
      "GRP": 214400
    },
    {
      "region": "Mykolaiv Oblast",
      "lat": 46.975,
      "lng": 31.9946,
      "Year": 2019,
      "agri_spec_grp": "18.20%",
      "mining_spec_grp": "0.70%",
      "posl_spec_grp": "13.10%",
      "industry_spec_grp": "13.80%",
      "other_spec_grp": "54.20%",
      "GRP": 92427
    },
    {
      "region": "Odesa Oblast",
      "lat": 46.4825,
      "lng": 30.7233,
      "Year": 2019,
      "agri_spec_grp": "8.40%",
      "mining_spec_grp": "0.00%",
      "posl_spec_grp": "9.60%",
      "industry_spec_grp": "9.60%",
      "other_spec_grp": "72.40%",
      "GRP": 197153
    },
    {
      "region": "Poltava Oblast",
      "lat": 49.5883,
      "lng": 34.5514,
      "Year": 2019,
      "agri_spec_grp": "14.40%",
      "mining_spec_grp": "31.90%",
      "posl_spec_grp": "9.00%",
      "industry_spec_grp": "42.00%",
      "other_spec_grp": "2.70%",
      "GRP": 187289
    },
    {
      "region": "Rivne Oblast",
      "lat": 50.6199,
      "lng": 26.2516,
      "Year": 2019,
      "agri_spec_grp": "17.00%",
      "mining_spec_grp": "1.80%",
      "posl_spec_grp": "12.40%",
      "industry_spec_grp": "14.20%",
      "other_spec_grp": "54.60%",
      "GRP": 67363
    },
    {
      "region": "Sumy Oblast",
      "lat": 50.9077,
      "lng": 34.7981,
      "Year": 2019,
      "agri_spec_grp": "22.80%",
      "mining_spec_grp": "7.40%",
      "posl_spec_grp": "13.50%",
      "industry_spec_grp": "20.90%",
      "other_spec_grp": "35.40%",
      "GRP": 75827
    },
    {
      "region": "Ternopil Oblast",
      "lat": 49.5535,
      "lng": 25.5948,
      "Year": 2019,
      "agri_spec_grp": "22.40%",
      "mining_spec_grp": "1.40%",
      "posl_spec_grp": "10.00%",
      "industry_spec_grp": "11.40%",
      "other_spec_grp": "54.80%",
      "GRP": 57140
    },
    {
      "region": "Kharkiv Oblast",
      "lat": 49.9935,
      "lng": 36.2304,
      "Year": 2019,
      "agri_spec_grp": "9.40%",
      "mining_spec_grp": "11.90%",
      "posl_spec_grp": "12.40%",
      "industry_spec_grp": "24.30%",
      "other_spec_grp": "42.00%",
      "GRP": 247596
    },
    {
      "region": "Kherson Oblast",
      "lat": 46.6354,
      "lng": 32.6169,
      "Year": 2019,
      "agri_spec_grp": "26.90%",
      "mining_spec_grp": "0.30%",
      "posl_spec_grp": "10.20%",
      "industry_spec_grp": "10.50%",
      "other_spec_grp": "52.10%",
      "GRP": 61939
    },
    {
      "region": "Khmelnytskyi Oblast",
      "lat": 49.4216,
      "lng": 26.9965,
      "Year": 2019,
      "agri_spec_grp": "25.40%",
      "mining_spec_grp": "0.80%",
      "posl_spec_grp": "10.40%",
      "industry_spec_grp": "11.20%",
      "other_spec_grp": "52.20%",
      "GRP": 83006
    },
    {
      "region": "Cherkasy Oblast",
      "lat": 49.4444,
      "lng": 32.0598,
      "Year": 2019,
      "agri_spec_grp": "20.00%",
      "mining_spec_grp": "0.60%",
      "posl_spec_grp": "19.80%",
      "industry_spec_grp": "20.40%",
      "other_spec_grp": "39.20%",
      "GRP": 103466
    },
    {
      "region": "Chernivtsi Oblast",
      "lat": 48.2915,
      "lng": 25.9403,
      "Year": 2019,
      "agri_spec_grp": "18.00%",
      "mining_spec_grp": "0.40%",
      "posl_spec_grp": "6.10%",
      "industry_spec_grp": "6.50%",
      "other_spec_grp": "69.00%",
      "GRP": 41660
    },
    {
      "region": "Chernihiv Oblast",
      "lat": 51.4982,
      "lng": 31.2893,
      "Year": 2019,
      "agri_spec_grp": "24.20%",
      "mining_spec_grp": "4.20%",
      "posl_spec_grp": "12.10%",
      "industry_spec_grp": "16.30%",
      "other_spec_grp": "43.20%",
      "GRP": 77981
    },
    {
      "region": "Kyiv",
      "lat": 50.4501,
      "lng": 30.5234,
      "Year": 2019,
      "agri_spec_grp": "0.00%",
      "mining_spec_grp": "0.00%",
      "posl_spec_grp": "5.50%",
      "industry_spec_grp": "5.50%",
      "other_spec_grp": "89.00%",
      "GRP": 949566
    }
  ];

// Initialize the map
var map = L.map('map').setView([49.0, 32.0], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to convert percentage string to float
function convertPercentageToFloat(percentageStr) {
  return parseFloat(percentageStr.replace(',', '.')) / 100;
}

// Function to create pie chart icon
function createPieChartIcon(regionData) {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');

  const chartData = {
      labels: ['Agriculture', 'Mining', 'Services', 'Industry', 'Other'],
      datasets: [{
          data: [
              convertPercentageToFloat(regionData.agri_spec_grp),
              convertPercentageToFloat(regionData.mining_spec_grp),
              convertPercentageToFloat(regionData.posl_spec_grp),
              convertPercentageToFloat(regionData.industry_spec_grp),
              convertPercentageToFloat(regionData.other_spec_grp)
          ],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#c9cbcf']
      }]
  };

  new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: {
          responsive: false,
          plugins: {
              tooltip: {
                  enabled: true,
                  callbacks: {
                      label: function (context) {
                          let label = context.label || '';
                          if (label) {
                              label += ': ';
                          }
                          if (context.raw !== null) {
                              label += (context.raw * 100).toFixed(2) + '%';
                          }
                          return label;
                      }
                  }
              },
              legend: {
                  display: false
              }
          },
          animation: {
              onComplete: function () {
                  const base64Image = canvas.toDataURL('image/png');
                  L.marker([regionData.lat, regionData.lng], {
                      icon: L.divIcon({
                          html: `<img src="${base64Image}" style="width: 100px; height: 100px;" />`,
                          iconSize: [100, 100],
                          className: 'custom-icon'  // This class is optional but useful for styling
                      })
                  }).bindPopup(`
                      <b>${regionData.region}</b><br>
                      Agriculture: ${regionData.agri_spec_grp}<br>
                      Mining: ${regionData.mining_spec_grp}<br>
                      Services: ${regionData.posl_spec_grp}<br>
                      Industry: ${regionData.industry_spec_grp}<br>
                      Other: ${regionData.other_spec_grp}
                  `).addTo(pieChartLayer);
              }
          }
      }
  });
}

// Load and display GeoJSON data for administrative borders
let geoData;
let adminLayer = L.layerGroup();
let pieChartLayer = L.layerGroup();

fetch('json&geojson files/Ukraine_Regions.geojson')
  .then(response => response.json())
  .then(data => {
      geoData = data;
      L.geoJSON(geoData, {
          onEachFeature: function (feature, layer) {
              // Add click event handler for each region
              layer.on('click', function (e) {
                  // Create custom popup
                  var popupContent = 'You clicked on ' + feature.properties.NAME_1;
                  var popup = L.popup({ maxWidth: 300 })
                      .setLatLng(e.latlng)
                      .setContent(popupContent)
                      .addTo(map);
              });
          }
      }).addTo(adminLayer);
  })
  .catch(error => {
      console.error('Error loading the GeoJSON file:', error);
  });

// Add pie charts to the map
data.forEach(region => {
  createPieChartIcon(region);
});

// Add layers control
var baseMaps = {
  "Administrative Borders": adminLayer,
  "Pie Charts": pieChartLayer
};

L.control.layers(baseMaps).addTo(map);

// Add initial layers to map
adminLayer.addTo(map);
pieChartLayer.addTo(map);
