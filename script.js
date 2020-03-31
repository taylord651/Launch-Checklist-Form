// Write your JavaScript code here!
window.addEventListener("load", function () {

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      
         let data = json[Math.floor(Math.random() * 6)];
         div.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${data.name}</li>
         <li>Diameter: ${data.diameter}</li>
         <li>Star: ${json.star}</li>
         <li>Distance from Earth: ${data.distance}</li>
         <li>Number of Moons: ${data.moons}</li>
      </ol>
      <img src="${data.image}"></img>
      `;
   });
});

   let form = document.querySelector("form");      
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

   form.addEventListener("submit", function (event) {

      event.preventDefault();

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Response required for all fields.");
      } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter the correct data type for response.")
      } else {

         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle ready for launch`;
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for laumch`;

         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready to launch`;
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = `There is not enought fuel for the journey.`;
         }; 
         faultyItems.style.visibility = "invisible";

         if (cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready to launch`;
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
         };
         faultyItems.style.visibility = "invisible";

      }

   



   })
});