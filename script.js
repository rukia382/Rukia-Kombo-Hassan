function getCountry() {

    let countryName = document.querySelector(".countryInput").value;

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)

    .then(res => {

        if (!res.ok) {
            throw new Error("Country not found");
        }

        return res.json();
    })

    .then(info => {

        let details = info[0];

        let name = details.name.common;

        let capitalCity = details.capital
            ? details.capital[0]
            : "N/A";

        let continent = details.region;

        let people = details.population.toLocaleString();

        let money = Object.values(details.currencies)[0].name;

        let language = Object.values(details.languages).join(", ");

        let flagImage = details.flags.png;

        document.querySelector(".result").innerHTML = `
            <h2>${name}</h2>
            <p><strong>Capital:</strong> ${capitalCity}</p>
            <p><strong>Region:</strong> ${continent}</p>
            <p><strong>Population:</strong> ${people}</p>
            <p><strong>Currency:</strong> ${money}</p>
            <p><strong>Languages:</strong> ${language}</p>
            <img src="${flagImage}" alt="Flag" width="200">
        `;
    })

    .catch(err => {

        document.querySelector(".result").innerHTML =
        `<p>${err.message}</p>`;

    });
}