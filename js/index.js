function remover(){
    document.getElementById("buho").innerHTML = "Parece de pelicula cuando pienso en que nos conocimos porque justo en pandemia, quisiste trabajar, y yo me cambie de gimnasio, casi como si estuvieramos destinados, sin embargo, nunca olvidaré esas miradas en el colegio, que creo que ha sido lo que logra que nuestra relación sea completamente diferente, tan solo con una mirada, podemos hablarnos, entendernos y decirnos las cosas, pero en verdad no esperaba que fueras de mi misma onda, con todos esos viajes que hicimos, cantando, bailando, disfrutando, incluso en los momentos de silencio solo sintiendonos, antes de conocerte creía que era feliz pero estaba equivocado, porque nunca había experimentado lo que tu me haces experimentar, con nuestras salidas a caminar, a andar en bici, con nuestras conversaciones, o simplemente con esas miradas que abren cada detalle de tu alma.";
    }
    function cambiartitulo() {
        let imagenes = [
            {
                src: "https://latravelista.com/wp-content/uploads/2020/05/ama-siempre-frase.jpg",
                width: "320",
                height: "320"
            },
            {
                src: "https://www.cuerpomente.com/medio/2022/03/17/el-amor-es-darle-al-otro-la-posibilidad-de-que-sea-la-persona-que-es-y-no-la-que-el-resto-espera-que-sea_39b66367_1200x1200.jpg",
                width: "360",
                height: "360"
            },
            {
                src: "https://i.pinimg.com/564x/e3/d1/58/e3d158028e5e3b01365d791fb4910b97--lupus-awareness-the-impossible.jpg",
                width: "420",
                height: "420"
            },

            {
                src: "https://i.ytimg.com/vi/-iDfHYknRrI/maxresdefault.jpg",
                width: "420",
                height: "420"
            },
            {
                src: "https://i.pinimg.com/originals/45/7f/a4/457fa4c6ed7733ec59493a91ef72ffee.jpg",
                width: "420",
                height: "420"
            }
            
        ];

        let bufferImagenes = [];

        for (const e of imagenes) {
            let imagen = new Image();
            imagen.src = e.src;
            imagen.width = e.width;
            imagen.height = e.height;

            bufferImagenes.push(imagen);
        }

        let indiceImagenAleatoria = generarEnteroAleatorio(imagenes.length);
        let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
        
        let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
    }

    function generarEnteroAleatorio(cantidadImagenes) {
        return Math.floor(Math.random() * cantidadImagenes);
    }




    function alerta (){
      alert("La respuesta es larga, pero bueno, desde el primer día me di cuenta que eras una mujer hermosa increiblemente, recuerdo también que me dijiste cuando nos veremos de nuevo?. En ese entonces jamas imagine que llegariamos tan lejos juntos, hoy nuestra relación es una utopía en mi vida, jamás imagine la suerte que tendría de estar con una persona, tan valiente, tan ejemplar, tan fuerte, la verdad que a veces pienso que soy directamente el hombre más afortunado del mundo por lo que me toco, eso es estar contigo, eres y serás siempre mi princesita, mi consetida y lo más importante la mujer mas bella que he conocido por dentro y por fuera");
    }
    