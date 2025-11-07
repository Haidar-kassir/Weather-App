
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
  
  //destructure properties
  // const cityDets = data.cityDets;
  // const weather = data.weather;
  const { cityDets, weather } = data;

  // update UI properties
  details.innerHTML = `
          <h5 class="my-3">${cityDets.EnglishName}</h5>
              <div class="my-3">${weather.WeatherText}</div>
              <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
              </div>`;

    // remove d-none if present — calling remove() is safe even if class isn't present
    card.classList.remove('d-none');
   
}


const updateCity = async (city) => {

  const cityDets = await getcitydetails(city);
  const weather = await getforcast(cityDets.Key);
  return { cityDets, weather };

};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});