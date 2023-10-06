function capitalize(str) {
  console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
module.exports = capitalize;
