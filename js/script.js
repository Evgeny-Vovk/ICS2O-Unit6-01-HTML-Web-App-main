// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-HTML/sw.js", {
    scope: "/ICS2O-Unit6-01-HTML/",
  })
}

/**
 *This function calculates celsius out of fahrenheit.
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  // process
  const celsius = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("celsius").innerHTML =
    "<p>Answer : " + celsius.toFixed(2) + " °C.</p> "
}
