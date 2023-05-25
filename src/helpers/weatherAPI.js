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

export const getWeatherByCity = (cityURL) => {
  //   seu código aqui
  try {
    const TOKEN = import.meta.env.VITE_TOKEN;
    const response = fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
    const data = response.json();
    const {
      temp: temperature,
      condition: { text: conditionText, icon: conditionIcon },
    } = data.current;
    return {
      temperature,
      conditionText,
      conditionIcon,
    };
  } catch (error) {
    console.error('Ocorreu um erro ao obter as infos do tempo para as cidades:', error);
    return null;
  }
};
