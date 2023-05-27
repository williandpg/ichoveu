const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const urlAPI = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;

  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const getWeatherByCity = async (cityURL) => {
  const urlAPI = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  const response = await fetch(urlAPI);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: data.location.url,
  };
};
