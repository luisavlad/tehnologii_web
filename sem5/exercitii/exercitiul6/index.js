// codul de aici functioneaza pe baza serverului din exercitiul3

const apiUrl = "http://localhost:8000/api";

async function get(url) {
  try {
    return (await axios.get(url)).data;
  } catch (error) {
    console.error("Eroare la cererea GET:", error);
    return null;
  }
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    })
  ).data;
}

async function sendData() {
  const id = document.getElementById("inputId").value;
  const displayDiv = document.getElementById("formData");

  if (!id) {
    displayDiv.innerHTML = "Te rog introdu un ID.";
    return;
  }

  const url = apiUrl + "/getPersonById/" + id;
  const person = await get(url);

  if (person) {
    displayDiv.innerHTML = `
        <h3>Persoana Gasita:</h3>
        <p><strong>ID:</strong> ${person.id}</p>
        <p><strong>Nume:</strong> ${person.name}</p>
        <p><strong>Varsta:</strong> ${person.age}</p>
      `;
  } else {
    displayDiv.innerHTML = `Nu a fost gasita nicio persoana cu ID-ul ${id}.`;
  }
}
