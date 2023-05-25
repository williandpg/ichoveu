// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  //   seu código aqui
  const TOKEN = import.meta.env.VITE_TOKEN;
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
