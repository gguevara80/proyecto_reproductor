let track_list = document.querySelector ('#track_list')
console.log (track_list)

let contenedor = document.querySelector('#contenedor')

axios.get('https://leonardoapi.onrender.com/music')
    

    .then( (res) => {    // Se reciben los datos del server
        
        res.data.map( (song) => { // Se mapean las canciones 
            
            let div = document.createElement('div')
            div.classList.add('musica')

         div.innerHTML = `
            <img src="${song.path.front}" alt="">
            <p>${song.title}</p>
            <p>${song.author}</p>
            </div> 
            `
            div.addEventListener( 'click', () => {

                // Clase siguiente ponemos a reproducir la cancion aquí
                document.querySelector('#acound-id-author').innerHTML = song.author
                document.querySelector('#acound-id-tittle').innerHTML = song.title
                document.querySelector('#acound-id-audio').setAttribute('src', song.path.front)
                document.querySelector('#current-song-audio').setAttribute('src', song.path.audio)

            } )

            // Agrego el componente al contenedor
            contenedor.appendChild(div)
        
        } )

        })