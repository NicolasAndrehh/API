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
        fetchData(data1.planets, function(error2, data2){
            if(error2) return console.log(error2);
            fetchData(data2.results[0].url, function(error3, data3){
                const { name } = data3
                const { rotation_period } = data3
                const { diameter } = data3
                const { climate } = data3
                const { gravity } = data3
                const { terrain } = data3

                console.log(`
                / Resultado consulta /
                Nombre: ${name}
                Periodo de rotacion: ${rotation_period}
                Diametro: ${diameter}
                Clima: ${climate}
                Gravedad: ${gravity}
                Terreno: ${terrain}
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
    
                // idInput.innerText = id;
                // nombreInput.innerText = nombre;
                // estadoInput.innerText = estado;
                // especieInput.innerText = especie;
                // generoInput.innerText = genero;
                // dimensionInput.innerText = dimension;
    
                // console.log(API);
                // console.log(API + data1.results[0].url);
                // console.log(data2.origin.url);
            })
        })
    })

    
// }    
