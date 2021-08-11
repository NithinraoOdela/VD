function updateMap() {
    console.log("Updating map with realtime data")
    fetch("jsondata.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 191, 255)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    
                })
                .setLngLat([longitude, latitude])
                .addTo(map); 

                // map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));

               
            });
        })
}

let interval = 2000;
setInterval( updateMap, interval); 