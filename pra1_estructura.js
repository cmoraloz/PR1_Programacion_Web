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

    showList() {
        
    }

    addMultipleFilms = (...films) => {

    }
    

    getFilmsByDateRange = (startDate, endDate) => {

    }

    sortFilmsByPopularity = () => {

    }
    
    findFilmById() {
        //Función recursiva
    }
    
    getMostCommonGenre() {
        //Uso de reduce
    }

    getPopularFilmTitles() {
        //Uso de map y filter
    }
}



