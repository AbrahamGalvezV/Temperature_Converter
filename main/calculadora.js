function convertTemperature() {
  const number = parseFloat(document.getElementById("number").value);
  const value1 = document.getElementById("selectorValue1").value;
  const value2 = document.getElementById("selectorValue2").value;

  // Verificamos que el número ha sido ingresado
  if (isNaN(number)) {
    document.getElementById("result").textContent = `Is not a valid number`;
    return;
  }

  // Calculamos y mostramos el resultado según el valor seleccionado
  let result = "";

  if (value1 === "c") {
    // Si se introducen Celsius en el box 1

    if (value2 === "f") {
      const fahrenheit = Math.floor(number * 1.8 + 32);
      result = `${number}ºC it's the same ${fahrenheit}ºF`;
    } else if (value2 === "k") {
      const kelvin = Math.floor(number + 273.15);
      result = `${number}ºC it's the same ${kelvin}ºK`;
    } else if (value2 === "c") {
      result = `${number}ºC`;
    }
  } else if (value1 === "f") {
    // Si se introducen Fahrenheits en el box 1
    if (value2 === "c") {
      const celsius = Math.floor((number - 32) / 1.8);
      result = `${number}ºF it's the same ${celsius}ºC`;
    } else if (value2 === "k") {
      const kelvin = Math.floor(((number - 32) * 5) / 9 + 273.15);
      result = `${number}ºF it's the same ${kelvin}ºK`;
    } else if (value2 === "f") {
      result = `${number}ºF`;
    }
  } else if (value1 === "k") {
    // Si se introducen Kelvin en el box 1
    if (value2 === "c") {
      const celsius = Math.floor(number - 273.15);
      result = `${number}ºK it's the same ${celsius}ºC`;
    } else if (value2 === "f") {
      const fahrenheit = Math.floor(((number - 273.15) * 9) / 5 + 32);
      result = `${number}ºK it's the same ${fahrenheit}ºF`;
    } else if (value2 === "k") {
      result = `${number}ºK`;
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
