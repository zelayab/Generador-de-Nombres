
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a Ajax e imprimir resultados
function cargarNombres(e){
e.preventDefault();

//Leer las variables
const origen = document.getElementById('origen');
const origenSeleccionado = origen.options[origen.selectedIndex].value;

const genero = document.getElementById('genero');
const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;
    
    let url = '';
    url += 'https://randomuser.me/api/?';



    //si hay genero agregarlo a la URL
    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // si hay una cantidad agregarlo a la url
    if(cantidad !== '') {
        url += `results=${cantidad}&`
    }
      // si hay origen agregarlo a la url
    if(origenSeleccionado !== '') {
        url += `nat=${origenSeleccionado}&`;
    }
    console.log(url);

    // crear fetch
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data.results);
            let html = `<h3>Nombres Generados</h3>`;
            html += `<ul class="lista">`;
            data.results.forEach(function(nombre){
                html+= `
                    <li>${nombre.name.first}</li>
                `;
            })
            html += `</ul>`;
            
            document.querySelector('#resultado').innerHTML = html;
            
            
        })
        .catch(error => console.log(error))
    }