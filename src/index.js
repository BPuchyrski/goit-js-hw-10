// import { create, lastIndexOf } from 'lodash';
// import './css/styles.css';
// import { fetchCountries } from './fetchCountries';
// var _ = require('lodash');

// const DEBOUNCE_DELAY = 300;

// const input = document.querySelector('#search-box');
// const ul = document.querySelector('.country-list');

// const fun = () => {
//   let countriesArr = fetchCountries(input.value);
//   countriesArr.then(data => {
//     let length = data.length;
//     console.log(data);
//     if (length > 1) {
//       const ul = document.querySelector('.country-list');
//       let items = data
//         .map(element => {
//           return `<li><img width="20px" src="${element.flags.svg}" alt="Flag" /></li>`;
//         })
//         .join('');
//       ul.insertAdjacentHTML('beforeend', items);
//     }
//   });
// };

// input.addEventListener('input', _.debounce(fun, DEBOUNCE_DELAY));
