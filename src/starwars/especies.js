let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://swapi.dev/api/";

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
        fetchData(data1.species, function(error2, data2){
            if(error2) return console.log(error2);
            fetchData(data2.results[0].url, function(error3, data3){
                const { name } = data3
                const { classification } = data3
                const { designation } = data3
                const { skin_colors } = data3
                const { hair_colors } = data3
                const { eye_colors } = data3

                console.log(`
                / Resultado consulta /
                Nombre: ${name}
                Clasificacion: ${classification}
                Designacion: ${designation}
                Colores de piel: ${skin_colors}
                Colores de cabello: ${hair_colors}
                Colores de ojos: ${eye_colors}
                `)
            })
        })
    })

    
// }    
