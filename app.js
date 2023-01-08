var movies=[
    {
        watched: true,
        name:"Titanic",
        year:1997,
        country:"USA",
        note:"Najgledaniji film ikada",
        actors:["Leonardo DiCaprio","Kate Winslet","Billy Zane"]
    },

    {
        watched: true,
        name:"The Godfather",
        year:1972,
        country:"USA",
        note:"",
        actors:["Al Pacino","Marlon Brando"]
    },

    {
        watched: false,
        name:"Top Gun: Maverick",
        year:2022,
        country:"USA",
        note:"Najpopularniji film u 2022.",
        actors:["Tom Cruise","Miles Teller"]
    }  
]

function changeCheckboxValue(index){
    let lastBoolean = movies[index].watched;
    let newBoolean= false;
    if (lastBoolean === false){
        newBoolean= true;}
    movies[index].watched = newBoolean;
    displayTable();    
}
 let newMovies = [];
  function displayTable(){
   newMovies = [];
    let index = 0;
     movies.forEach(function(movie){
      let column = "red";
       if (movie.watched === true)
        column = "green"
         newMovies.push(
        `<tr class="${column}">
        <td>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" onclick="changeCheckboxValue(${index})" ${convertBoolean(movie.watched)}>
        </div>
        </td>
        <td>${movie.name}</td>
        <td>${movie.year}</td>
        <td>${movie.country}</td>
        <td>${movie.note}</td>
        <td>${movie.actors.join(", ")}</td>

        </tr>`);
        index++;
    })
    document.getElementById("table").innerHTML = newMovies.join("");
       
}
function convertBoolean(value){
    if (value === true)
    return "checked";
    
}
function getData(){
    let Name = document.getElementById("input-name").value;
    let Year = document.getElementById("input-year").value;
    let Country = document.getElementById("input-country").value;
    let Note = document.getElementById("input-notes").value;
    let Actors = document.getElementById("input-actors").value;
    let arrayActors = Actors.split(",");
    
    let newMovie = {
        watched: false,
        name: Name,
        year: Year,
        country: Country,
        note: Note,
        actors: arrayActors
    }
    
    movies.push(newMovie);
    displayTable();
}

displayTable();