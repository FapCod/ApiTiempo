let longitude, latitude= 0;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        let key='186d3d17335c58a3208760d507c47582';
        let url=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&appid=${key}`;
        console.log(url);
        const getData=async(url)=>{
            try {
                const datos=await fetch(url);
                const data=await datos.json();
                console.log(data);
                // imprimir en pantalla html
                document.body.innerHTML+=`
                <div class="card" style="width: 18rem;">
                <img src="sol.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Detalle de tiempo en tu ubicacion</h5>
                  <p class="card-text">Activa la ubicacion en tu dispositivo para que funcione correctamente con tu gps.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Tiempo: <b>${data.weather[0].description} </b></li>
                  <li class="list-group-item">Porcenteaje de nubes: ${data.clouds.all}</li>
                  <li class="list-group-item">Poblacion: ${data.name}</li>
                  <li class="list-group-item">Temperatura: ${data.main.temp}</li>
                  <li class="list-group-item">Presion: ${data.main.pressure}</li>
                  <li class="list-group-item">Humedad: ${data.main.humidity}</li>
                  <li class="list-group-item">Visibilidad: ${data.visibility}</li>
                  <li class="list-group-item">Pais: ${data.sys.country}</li>
                </ul>
                <div class="card-body">
                  <a href="${url}"  class="card-link">Detalle para nerds</a>
                  <a href="#" class="card-link">Apoya con un like</a>
                </div>
              </div>
                `;
            } catch (error) {
                console.error(error);
            }
        }
        getData(url);
    });
}