let dis = document.querySelector('.display');
async function getData() {
  try {
    let weatherJson = await fetch("https://api.weatherapi.com/v1/current.json?q=london&key=edd866e2f50c435cb96162914231209")
    let weatherData = await weatherJson.json();
    console.log(weatherData.current.temp_f);
  }
  catch {
    console.log("FALSE");
  }
}
getData();
