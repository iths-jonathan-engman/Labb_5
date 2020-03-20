const grabData = () => {
    fetch("https://swapi.co/api/planets")
      .then(response => response.json())
      .then(planets => {
        const planet = planets;

        const nameElement = document.createElement("h2");
        nameElement.textContent = planet;
        
        const beerElement = document.getElementById("beer");
        beerElement.innerHTML = "";
        
        beerElement.appendChild(nameElement);
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  
  // Grab a new beer when clicking the button
  document.getElementById("grabButton").addEventListener("click", grabData);