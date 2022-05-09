// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-HTML-Web-App/sw.js", {
    scope: "/ICS2O-Unit6-01-HTML-Web-App/",
  })
}

/**
 * This function Converts Fehrenheit to Celsius.
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5/9 

  // output
  document.getElementById('area').innerHTML = 'The Celsius temperature is: ' +  celsius.toFixed(2) + ' °C'
}