const fetch = require("node-fetch");

const romania = {
  lamin: "43.6188114",
  lamax: "48.2654738",
  lomin: "20.2619955",
  lomax: "30.0454257",
};

async function fetchFlightsOverRomania() {
  const url = `https://opensky-network.org/api/states/all?lamin=${romania.lamin}&lomin=${romania.lomin}&lamax=${romania.lamax}&lomax=${romania.lomax}`;

  try {
    const reponse = await fetch(url);

    if (!reponse.ok) {
      throw new Error(`Eroare de tip ${Response.status}`);
    }

    const data = await reponse.json();

    data.states.forEach((flight) => {
      const flightId = flight[0].trim();
      const flightNumber = flight[1].trim();
      const country = flight[2];
      const longitude = flight[5];
      const latitude = flight[6];
      const altitude = flight[7];

      console.log(
        `Flight ID: ${flightId}, Flight number: ${flightNumber}, Country of origin: ${country}, Latitude: ${latitude}, Longitude: ${longitude}, Altitude: ${altitude}`
      );
    });
  } catch (error) {
    console.warn(error);
  }
}

fetchFlightsOverRomania();
