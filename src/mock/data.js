const libros = [
    {id: "1", nombre: "It", categoria: "Terror", descripcion: "Cuenta la historia, en un juego de correspondencias con el pasado y el presente, de un grupo de siete amigos que son perseguidos por una entidad sobrenatural, al que llaman «Eso», que es capaz de cambiar de forma y se alimenta principalmente del terror que produce en sus víctimas.",stock: 10, precio: 3000, rutaImagen: "https://i.postimg.cc/L8ybcmRG/LIBRO-IT.webp"},
    {id: "2", nombre: "Drácula", categoria: "Terror", descripcion: "Drácula, es una novela de fantasía gótica escrita por Bram Stoker, publicada en 1897. Publicada en castellano por Ediciones Hymsa bajo la colección ‘La novela aventura’ en 1935, con portada de Juan Pablo Bocquet e ilustraciones", stock: 5, precio: 4200, rutaImagen: "https://i.postimg.cc/BbfrqKyQ/libro-Dracula.jpg"},
    {id: "3", nombre: "Gabriel Rolon", categoria: "Psicologia", descripcion: "La angustia, los miedos, la sexualidad, el amor y el desamor, las adicciones y la soledad se dan cita en un viaje que paciente y psicoanalista emprenden juntos. Una travesía las más de las veces dolorosa, sí, pero que una vez cumplida se vive como transformadora.", stock: 15, precio: 4500, rutaImagen: "https://i.postimg.cc/4x2jYMM0/libro-Gabriel-Rolon.jpg"},
    {id: "4", nombre: "Poderosa Autoestima", categoria: "Psicologia", descripcion: "Muchas mujeres sienten que, hagan lo que hagan, fracasan en sus actos, que nadie las quiere de verdad, que las menosprecian aunque ellas no merecen ese trato, que en numerosos aspectos dependen del hombre que tienen al lado… La costilla de Adán, en definitiva; primero él, luego ella.", stock: 12, precio: 2000, rutaImagen: "https://i.postimg.cc/05mvL83y/libro-Poderosa-Autoestima.jpg"},
    {id: "5", nombre: "Juego de Tronos", categoria: "Acción", descripcion: "Juego de tronos es la historia de la lucha por un trono, el trono de hierro, forjado con las espadas de los enemigos vencidos. Siete son los reinos de Poniente y muchas las casas que se disputarán la corona: los herederos, los exiliados, los despojados y los actuales regentes.", stock: 20, precio: 2600, rutaImagen: "https://i.postimg.cc/BvkwvNjg/LIBRO-JUEGO-DE-TRONOS.jpg"},
    {id: "6", nombre: "Soy Leyenda", categoria: "Acción", descripcion: "Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche.", stock: 17, precio: 1200, rutaImagen: "https://i.postimg.cc/ZqCMZX5n/LIBRO-SOY-LEYENDA.webp"}
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data, intente mas tarde')
            } else {
                resolve(libros)
            }
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(libros.find((item)=> item.id === id))
        },2000)
    })
}