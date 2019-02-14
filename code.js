var button = document.getElementById("submit");
button.addEventListener("click", function(event) {
  event.preventDefault();

  var art = document.getElementById("artist").value;
  var song = document.getElementById("song").value;
  fetch("https://api.lyrics.ovh/v1/" + art + "/" + song)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var lyrics = document.getElementById("lyrics");
      lyrics.innerHTML = data.lyrics;
    });
});
