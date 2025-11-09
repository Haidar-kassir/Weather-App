

class Forcast {
  constructor() {
    this.key = "zpka_ddded21e85f3425296de3834b6e6d47d_89e2167e";
    this.cityURL = "https://dataservice.accuweather.com/locations/v1/cities/search";
    this.forcastURL = "https://dataservice.accuweather.com/currentconditions/v1/";
  }

   async updateCity (city) {

    const cityDets = await this.getcitydetails(city);
    const weather = await this.getforcast(cityDets.Key);
  return { cityDets, weather };

  }

    async getcitydetails (city) {
      const query = `?apikey=${this.key}&q=${city}`;
      const response = await fetch(this.cityURL + query );
      /**
      * returns an array, sorted by the closest match
      */
      const data = await response.json();
      /*return the closest match */
      return data[0];
    }

    async getforcast (id) {
      const query = `${id}?apikey=${this.key}`;
      const response = await fetch(this.forcastURL + query);
      /**
      * returns an array with current conditions object of one element
      */
      const data = await response.json();
      return data[0];
    }
}
