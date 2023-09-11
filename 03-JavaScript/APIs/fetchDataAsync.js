const img = document.querySelector('img');
async function getDogs() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=lsArzCDG6hPQzUx3ZB9PdHq8zQQGMw6t&s=dog', { mode: 'cors' });
  const dogData = await response.json();
  img.src = dogData.data.images.original.url;
}
getDogs();

