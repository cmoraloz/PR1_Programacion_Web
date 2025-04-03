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

//5 Uso de reduce para obtener el género más común.
    
    getMostCommonGenre() {
       const genreCount = this.film.reduce((acc, film) => {
           film.genre.ids.forEach(genre => {
               acc[genre] = (acc[genre] || 0) + 1;
           });
           return acc;
       }, {});
        return Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a:b);
    }

    getPopularFilmTitles() {
        //Uso de map y filter
    }
}



