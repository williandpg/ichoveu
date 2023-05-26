// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const cityInformation = {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: data.location.url,
  };
  return cityInformation;
};
