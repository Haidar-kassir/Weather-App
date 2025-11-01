const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');
const cityforcast = document.getElementById('cityforcast');

cityInput.addEventListener('change', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    console.log(city);
    if (city.length){
        getcityid(city)
          .then(data => getforcast(data))
          .then(data => {
            console.log(data);
              cityforcast.innerText = `The weather is ${data.WeatherText}\nTemp = ${data.Temperature.Metric.Value}\u00B0C`;
          })
          .catch(err => {
              cityforcast.innerText = `Error: ${err.message}`;
          });
        cityInput.value = '';
    }
});