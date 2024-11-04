function convertTemperature() {
  const number = parseFloat(document.getElementById("number").value);
  const value1 = document.getElementById("selectorValue1").value;
  const value2 = document.getElementById("selectorValue2").value;

  // Verificamos que el numero ha sido ingresado
  if (isNaN(number)) {
    document.getElementById("result").textContent =
      "Please enter a number";
    return;
  }

  // Calculamos y mostramos el resultado según el valor seleccionado
  let result = "";

  if (value1 === "c") { // Si se introducen celsius en el box 1

    if (value2 === "f") {
      const fahrenheit = Math.floor(number * 1.8 + 32);
      result = `${number}ºC es igual a ${fahrenheit}ºF`;
    } 
    
    else if (value2 === "k") {
      const kelvin = Math.floor(number + 273.15);
      result = `${number}ºC es igual a ${kelvin}ºK`;
    } 
    
    else {
      result = `${number}ºC es igual a ${number}ºC`;
    }


  } else if (value1 === "f") { // Si se introducen fahrenheits en el box 1

    if (value2 === "c") {
      const celsius = Math.floor((number - 32) / 1.8);
      result = `${number}ºF es igual a ${celsius}ºC`;
    } 
    
    else if (value2 === "k") {
      const kelvin = Math.floor(((number - 32) * 5) / 9 + 273.15);
      result = `${number}ºF es igual a ${kelvin}ºK`;
    } 
    
    else {
      result = `${number}ºF es igual a ${number}ºF`;
    }

  } else if (value1 === "k") { // Si se introducen kelvin en el box 1

    if (value2 === "c") {
      const celsius = Math.floor(number - 273.15);
      result = `${number}ºK es igual a ${celsius}ºC`;
    } 
    
    else if (value2 === "f") {
      const fahrenheit = Math.floor(((number - 273.15) * 9) / 5 + 32);
      result = `${number}ºK es igual a ${fahrenheit}ºF`;
    } 
    
    else {
      result = `${number}ºK es igual a ${number}ºK`;
    }
  }

  document.getElementById("result").textContent = result;
}

// Asignamos los eventos a los selectores y al input
document
  .getElementById("selectorValue1")
  .addEventListener("change", convertTemperature);
document
  .getElementById("selectorValue2")
  .addEventListener("change", convertTemperature);
document.getElementById("number").addEventListener("input", convertTemperature);
