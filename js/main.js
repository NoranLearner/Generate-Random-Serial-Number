function generateSerial (params) {
  var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var serialLength = 20;
  var randomSerial = '';

  for (var i = 0; i < serialLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    randomSerial += chars.substring(randomNumber, randomNumber + 1);
  }

  // console.log(randomNumber);
  // console.log(randomSerial = chars.substring(1, 4));
  console.log(randomSerial);

  document.getElementById('serial').innerHTML = randomSerial;
}