let dis = document.querySelector('.display');
async function getData(city) {
  try {
    let weatherJson = await fetch("https://api.weatherapi.com/v1/current.json?key=edd866e2f50c435cb96162914231209&q=" + city)
    let weatherData = await weatherJson.json();
    dis.innerText = weatherData.current.temp_f;
  }
  catch {
    alert("Something went wrong");
  }
}
const inp = document.getElementById('city');
inp.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getData(inp.value);
  }
})
