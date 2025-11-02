const key = "zpka_ddded21e85f3425296de3834b6e6d47d_89e2167e";

const getcityid = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query );
    /**
     * returns an array, sorted by the closest match
     */
    const data = await response.json();
    /*return the closest match */
    return data[0].Key;
};


const getforcast = async (id) => {
    const base = "https://dataservice.accuweather.com/currentconditions/v1/";   
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    /**
     * returns an array with current conditions object of one element
     */
    const data = await response.json();
    return data[0];
}

