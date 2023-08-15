const img = document.querySelector('img');
async function searchGIF(str) {
  let link = 'https://api.giphy.com/v1/gifs/translate?api_key=lsArzCDG6hPQzUx3ZB9PdHq8zQQGMw6t&s=';
  link += str;
  console.log(link);
  fetch(link, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function() {
      link = 'https://api.giphy.com/v1/gifs/translate?api_key=lsArzCDG6hPQzUx3ZB9PdHq8zQQGMw6t&s=dog';
    })
}
searchGIF('cat');
const inp = document.getElementById('search');
inp.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchGIF(inp.value);
  }
})
