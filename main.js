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
                document.querySelector('#audio').setAttribute('src', song.path.audio)
                document.querySelector('#title').innerHTML = song.title
            } )

            // Agrego el componente al contenedor
            contenedor.appendChild(div)
        
        } )

        })