import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css

const WBS = [52.457131, 13.54007]; // Initial WBS coordinates
const map = Leaflet.map('map').setView(WBS, 13); // Create map object

const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); // Custom marker icon

// Define your locations
const myLocations = [
  {
    name: 'WBS CODING SCHOOL',
    location: [52.457131, 13.54007],
    description: 'The best coding school in the world'
  },
  {
    name: 'Alexanderplatz',
    location: [52.521918, 13.413215],
    description: 'The most famous square in Berlin'
  },
  {
    name: 'Brandenburg Gate',
    location: [52.516275, 13.377704],
    description: 'The most famous gate in Berlin'
  },
  {
    name: 'Berlin Wall',
    location: [52.507541, 13.39032],
    description: 'The most famous wall in Berlin'
  }
];

// Add markers to the map with a popup
myLocations.forEach(location => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(`<strong>${location.name}</strong><br>${location.description}`) // Popup with name and description
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);

// Add the tile layer for the map
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
