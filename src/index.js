import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { fetchCountries } from './js/fetchCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

fetch('https://restcountries.com/v2/name/uk?fields=name,capital,flag,flags,population,languages')
    .then(response => {
        return response.json();
    })
    .then(countries => { console.log(countries) })
    .catch(error => { 
        console.log(error);
    });
 