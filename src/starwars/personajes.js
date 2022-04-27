let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://swapi.dev/api/people/";

// let tabla = document.getElementById('tabla');
// let idInput = document.getElementById('id');
// let nombreInput = document.getElementById('nombre');
// let estadoInput = document.getElementById('estado');
// let especieInput = document.getElementById('especie');
// let generoInput = document.getElementById('genero');
// let dimensionInput = document.getElementById('dimension');

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function(event){
        
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

// for (let i = 0; i < 5; i++) {

    
    fetchData(API, function(error1, data1){
        if(error1) return console.log(error1);
        fetchData(data1.results[0].films[2], function(error2, data2){
            if(error2) return console.log(error2);
            fetchData(data2.characters[4], function(error3, data3){
                const { name } = data3
                const { height } = data3
                const { mass } = data3
                const { hair_color } = data3
                const { skin_color } = data3
                const { eye_color } = data3

                console.log(`
                / Resultado consulta /
                Nombre: ${name}
                Altura: ${height}
                Peso: ${mass}
                Color de cabello: ${hair_color}
                Color de piel: ${skin_color}
                Color de ojos: ${eye_color}
                `)

                // tabla.innerHTML += `
                // <tr>
                //     <td>${i}</td>
                //     <td>${name}</td>
                //     <td>${height}</td>
                //     <td>${mass}</td>
                //     <td>${hair_color}</td>
                //     <td>${skin_color}</td>
                //     <td>${eye_color}</td>
                // </tr>`;
            })
        })
    })

    
// }    
