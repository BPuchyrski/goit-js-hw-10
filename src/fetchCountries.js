function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages,region`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export { fetchCountries };
