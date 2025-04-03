//PR1_Programación web

//1. Creación de la clase Film.
//La clase Film representa una película y tiene un constructor que inicializa las propiedades de la película. Cada instancia de esta clase contendrá información como el título, la popularidad, la fecha de lanzamiento etc.
class Film {
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.genre_ids = genre_ids;
    }

    //Utilizamos Getters y setters para encapsular las propiedades. Esto nos permite controlar cómo se accede y modifica cada propiedad.
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
}

//2. Creación de la clase FilmList.
//Esta clase reprensenta una lista de películas y contiene varios métodos para gestionarla.

class FilmList {
    constructor() {
        this.film = []; //Inicializamos la lista como un array vacío.
    }

//2.1 Método para agregar una película a la lista.
    
    addFilm (film){
        this.film.push(film); //Añadimos la película al array.
    }

//2.2 Método para eliminar una película de la lista por su ID.

    removeFilm (filmId) {
        this.films = this.films.filtr(film => film.id !== filmId); //Filtramos las películas que no coincidan por su ID.
    }

//2.3 Método para mostrar la lista de películas.
    
    showList() {
        this.films.forEach(film => {
            console.log(`Título: ${film.title}, Fecha de lanzamiento: ${film.release_date}`); //Recorremos la lista con un forEach y mostramos el título y la fecha de lanzamiento de cada película.
        });
    }

//3. Funciones flecha.

//3.1. Función flecha para agregar varias películas a la lista.
    
    addMultipleFilms = (...films) => {
        this.films.push(...films); //Añadimos todas las películas al array con el operador rest.
    }
    
//3.2 Función flecha para filtrar películas por la fecha de lanzamiento.
    
    getFilmsByDateRange = (startDate, endDate) => {
        return this.film.filter(film => {
            const release_date = new Date (film.release_date); //Convertimos la fecha en objeto Date.
            return release_date >= new Date (starDate) && release_date <= new Date (endDate); //Comparamos las fechas y nos devuelve las películas que tengan la fecha de lanzamiento dentro del rango especificado.
        });
    }

//3.3 Función flecha para ordenar películas por popularidad.

    sortFilmsByPopularity = () => {
        this.film.sort((a, b) => b.poularity - a.popularity); //Usamos sort para ordenar las películas de mayor a menor popularidad.
    }

//4. Función recursiva para buscar una película por su ID.
    
    findFilmById() {
        if (index >= this.fils.lenght) return null; //Recorremos el array y, si no encontramos la película, devolvemos null.
        if (this.film[index]id === filmID) return this.film[index]; //Recorremos el array y, si encontramos la película, devolvemos el objeto de la película.
        return this.findFilmById(filmID, index + a); //Llamamos a la función recursiva aumentando el índice.
    }

//5. Uso de reduce para obtener el género más común.
    
    getMostCommonGenre() {
       const genreCount = this.film.reduce((acc, film) => { //Usamos reduce para contar las veces que aparece cada género.
           film.genre.ids.forEach(genre => { //Recorremos los géneros de cada película con un forEach.
               acc[genre] = (acc[genre] || 0) + 1; //Si el género ya existe, aumentamos su contador. Si no existe, lo inicializamos a 1.
           });
           return acc; //Devolvemos el acumulador.
       }, {});
        return Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a:b); //Devolvemos el género más común comparando los contadores de cada género.
    }

//6. Uso de map y filter para obtener los títulos de las películas populares.

    getPopularFilmTitles() {
        return this.films
        .filter(film => film.vote_average >= minVotes) //Filtramos las pelíulas que tengan una calificación mayor o igual a minVotes.
        .map(film => film.title); //Usamos map para obtener sólo los título de las películas filtradas.
    }
}

//Pruebas de funcionamiento.

//Creamos películas de ejemplo.

const film1 = new Film(1, "Titanic", "Un romance trágico a bordo del barco Titanic", 98, "titanic.jpg", "1997-12-19", 7.8, 30000, [18, 10749]);
const film2 = new Film(2, "El padrino", "La historia de una familia mafiosa y su lucha por el poder", 99, "godfather.jpg", "1972-03-24", 9.2, 40000, [18, 80]);
const film3 = new Film(3, "El club de la lucha", "Un hombre se une a un club de lucha clandestino", 95, "fightclub.jpg", "1999-10-15", 8.8, 25000, [18, 53]);

//Creamos una lista de películas y añadimos las películas de ejemplo.

const myFilmList = new FilmList();
myFilmList.addFilm(film1);
myFilmList.addFilm(film2);
myFilmList.addFilm(film3);

//1. Mostramos la lista de películas.

console.log("Lista de películas:");
myFilmList.showList();

//2. Buscamos una película por su ID.

console.log("Películas encontradas por ID:" myFilmList.findFilmById(1));

//3. Obtenemos el género más común.

console.log("Género más común:" myFilmList.getMostCommonGenre());

//4. Obtenemos los títulos de las películas populares con un promedio de votos mayor o igual a 8.5.

console.log("Títulos de películas populares:", myFilmList.getPopularFilmTitles(8.5));

//5. Filtramos películas por fecha de lanzamiento.

console.log("Películas lanzadas entre 1990 y 2000:", myFilmList.GgetFilmsByDateRange(""1990-01-01", "2000-12-31"));

//6. Ordenamos películas por popularidad.

console.log("Películas ordenadas por popularidad:");
myFilmList.sortFilmsByPopularity();
myFilmList.showList();
