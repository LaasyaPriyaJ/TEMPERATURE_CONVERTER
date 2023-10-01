document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convert-btn");
  const degreeInput = document.getElementById("degree");
  const resultSpan = document.getElementById("result");
  const currentTimeSpan = document.getElementById("current-time");

  convertBtn.addEventListener("click", convertTemperature);

  degreeInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });

  function convertTemperature() {
    const degree = parseFloat(degreeInput.value);

    if (isNaN(degree)) {
      resultSpan.textContent = "Invalid input";
      return;
    }

    const tempType = document.getElementById("temp-type").value;

    if (tempType === "fahrenheit") {
      const fahrenheit = (degree * 9/5) + 32;
      resultSpan.textContent = `${degree.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (tempType === "kelvin") {
      const kelvin = degree + 273.15;
      resultSpan.textContent = `${degree.toFixed(2)}°C is ${kelvin.toFixed(2)} K`;
    }
  }

  function updateTime() {
    const now = new Date();
    currentTimeSpan.textContent = now.toLocaleString();
  }

  updateTime();
  setInterval(updateTime, 1000);
});
