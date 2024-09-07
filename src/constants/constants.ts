const forecastUrl = "https://api.open-meteo.com/v1/forecast";
const cityUrl = "https://geocoding-api.open-meteo.com/v1/search";
const otherCitiesURl = 'https://api.api-ninjas.com/v1/city'
const bigCities = [
  { "city": "London", "latitude": "30.5238", "longitude": "50.4547" },
  { "city": "London", "latitude": "30.5238", "longitude": "50.4547" },
  { "city": "Kyiv", "latitude": "50.11552", "longitude": "8.68417" },
  { "city": "Frankfurt am Main", "latitude": "51.19537", "longitude": "13.30917" },
  { "city": "Lommatzsch", "latitude": "30.5238", "longitude": "50.4547" },
  { "city": "Kyiv", "latitude": "50.45466", "longitude": "30.5238" },
  { "city": "London", "latitude": "51.19537", "longitude": "13.30917" },
  { "city": "Lommatzsch", "latitude": "38.32262", "longitude": "-75.21769" },
  { "city": "Berlin", "latitude": "19.07283", "longitude": "72.88261" },
  { "city": "Mumbai", "latitude": "41.01384", "longitude": "28.94966" },
  { "city": "Istanbul", "latitude": "-6.1818", "longitude": "106.8223" },
  { "city": "Jakarta Pusat", "latitude": "-7.1099", "longitude": "107.7565" },
  { "city": "Bangkok", "latitude": "-26.21554", "longitude": "23.11599" },
  { "city": "Sydney", "latitude": "41.00112", "longitude": "-98.60757" },
  { "city": "Cairo", "latitude": "-6.79415", "longitude": "-76.32706" },
  { "city": "Buenos Aires", "latitude": "42.42971", "longitude": "-91.33098" },
  { "city": "Delhi", "latitude": "30.72608", "longitude": "108.67483" },
  { "city": "Beijing", "latitude": "43.45951", "longitude": "-76.22882" },
  { "city": "Mexico", "latitude": "37.566", "longitude": "126.9784" }
];

export { forecastUrl, cityUrl, otherCitiesURl, bigCities };
