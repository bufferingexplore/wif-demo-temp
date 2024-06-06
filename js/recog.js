document.addEventListener("DOMContentLoaded", function() {
  var baseURL = window.location.origin;
  
  fetch(baseURL + '/env.json')
    .then(response => response.json())
    .then(data => {
      var elements = document.querySelectorAll('[env-option]');
      elements.forEach(function(element) {
        var option = element.getAttribute('env-option');
        var dataKey = element.getAttribute('env-data');
        var dataValue = data[dataKey];
        
        if (option === 'direct') {
          var href = element.getAttribute('href');
          if (href === null || href === "") {

            element.setAttribute('href', dataValue);
          } else {

            element.setAttribute('href', dataValue);
          }
        } else if (option === 'text') {

          element.innerText = dataValue;
        }
      });
    })
    .catch(error => console.error('Error:', error));
});