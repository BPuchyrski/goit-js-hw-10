import { create, lastIndexOf } from 'lodash';
import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
var _ = require('lodash');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

const fun = () => {
  let countriesArr = fetchCountries(input.value.trim());
  countriesArr.then(data => {
    let length = data.length;
    console.log(data);
    const ul = document.querySelector('.country-list');
    if (length > 1 && length < 10) {
      ul.innerHTML = '';
      let items = data
        .map(element => {
          return `<li><img width="40px" src="${element.flags.svg}" alt="Flag" />${element.name.common}</li>`;
        })
        .join('');

      ul.insertAdjacentHTML('beforeend', items);
    } else if (length === 1) {
      ul.innerHTML = '';
      let items = data
        .map(element => {
          return `<li><img width="100px" src="${
            element.flags.svg
          }" alt="Flag" /><h2>${element.name.common}</h2><p>Capital: ${
            element.capital[0]
          }</p> <p>Population: ${element.population}</p><p>Region: ${
            element.region
          }</p><p>languages: ${Object.values(element.languages)}</p></li>`;
        })
        .join('');

      ul.insertAdjacentHTML('beforeend', items);
    } else if (length > 10) {
      ul.innerHTML = '';
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name'
      );
    } else if (data.status === 404) {
      ul.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    } else if (input.value === '') {
      ul.innerHTML = '';
    }
  });
};

input.addEventListener('input', _.debounce(fun, DEBOUNCE_DELAY));
