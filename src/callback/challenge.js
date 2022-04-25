// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

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

for (let i = 0; i < 5; i++) {

    
    fetchData(API, function(error1, data1){
        if(error1) return console.log(error1);
    
        fetchData(API + data1.results[i].id, function(error2, data2){
            if(error2) return console.log(error2);
            
            fetchData(data2.origin.url, function(error3, data3){
                if(error3) return console.log(error3);
                
                let infoCount = (data1.info.count);
                let id = (data2.id);
                let nombre = (data2.name);
                let estado = (data2.status);
                let especie = (data2.species);
                let genero = (data2.gender);
                let dimension = (data3.dimension);


                tabla.innerHTML += `<tr><td id='id'>${id}</td><td id='nombre'>${nombre}</td><td id='estado'>${estado}</td><td id='especie'>${especie}</td><td id='genero'>${genero}</td><td id='dimension'>${dimension}</td></tr>`
    
                // idInput.innerText = id;
                // nombreInput.innerText = nombre;
                // estadoInput.innerText = estado;
                // especieInput.innerText = especie;
                // generoInput.innerText = genero;
                // dimensionInput.innerText = dimension;
    
                console.log(API);
                console.log(API + data1.results[0].id);
                console.log(data2.origin.url);
            })
        })
    })

    
}    
