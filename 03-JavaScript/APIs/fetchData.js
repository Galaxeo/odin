const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=lsArzCDG6hPQzUx3ZB9PdHq8zQQGMw6t&s=cats', { mode: 'cors' })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.data.images.original.url);
  })
  ;
