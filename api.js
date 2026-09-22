const moeda = process.argv[2];
const numeroDias = process.argv[3];

fetch(`https://economia.awesomeapi.com.br/json/daily/${moeda}/${numeroDias}?format=json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log(JSON.stringify(data));
    })
    .catch(error => {
        console.error(error.message);
        process.exit(1);
    });