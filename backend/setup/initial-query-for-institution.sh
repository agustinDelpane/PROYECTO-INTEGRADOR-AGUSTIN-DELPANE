db.institutions.insertOne({
    name: "Rock Hard",
    address: "Av. Sarmiento 188, Buenos Aires, Argentina",
    phone: "+54 11 2345-6789",
    email: "info@rockhardmusic.com",
    logo: "logo.png",
    mission: {
        description: "Nuestra misión personal como tienda de instrumentos es poder acercar el maravilloso mundo de la música hacia tus manos, con la mejor calidad de instrumentos al mejor precio posible. En un mundo cada vez más digital, queremos que la gente vuelva a acercarse a los instrumentos tradicionales y a la belleza de la composición musical. Ya sea que compres una guitarra, una batería, un teclado o el instrumento que precises, nuestra misión es entregar la mejor calidad al mejor precio del mercado, con una atención al cliente personalizada y detallada para despejar cualquier duda que se pueda encontrar en el camino a convertirse en un nuevo gran músico."
        thumbnail: "mission.png",
    },
    vision: {
        description: "Nuestra visión se basa en que un mundo más feliz es un mundo con más música, más gente aprendiendo a componer o a tocar y disfrutar sus canciones favoritas a través de un instrumento. Eso se ha perdido con el paso del tiempo y el avance masivo de las tecnologías. Hoy ponemos nuestro negocio a disposición para que cualquiera pueda volver al primer amor de la humanidad: la música. A través de nuestra plataforma, o en nuestro local físico ubicado en el barrio de Núñez, podrás comprar, ver o consultar por instrumentos de todas las clases. Todas las semanas tenemos nuevos instrumentos, por lo que si no encuentras tu instrumento favorito acá, ¡es probable que lo encuentres la semana próxima! También, viniendo a nuestro local en Monroe 814, podrás ver y probar distintos instrumentos para ver cuál se adapta más a tus necesidades musicales. Todo al mejor precio del mercado y con la mejor calidad y atención.",
        thumbnail: "vision.png",
    },
    values: {
        description: "Nuestros valores están siempre con el cliente y a favor de facilitar el mundo de la música hacia cualquier persona que esté interesada. Nos respaldamos en una gran atención y servicio de calidad para servir al cliente de la mejor forma. ¡Cualquier interés o pregunta es válida! No es necesario tener conocimientos de música para ser cliente de esta gran tienda de música. Nadie va a juzgarte por no saber cómo suena un Si bemol en afinación Drop C#. Aunque no sepas ni cómo cambiar una cuerda, ¡no hay problema! Nuestros profesionales van a estar a disposición para ayudarte y despejarte cualquier duda que tengas para que puedas decidir si te gustaría entrar en el maravilloso mundo de la música con el instrumento que más te guste.",
        thumbnail: "values.png",
    },
    createdAt: new Date(),
    updatedAt: new Date()
});