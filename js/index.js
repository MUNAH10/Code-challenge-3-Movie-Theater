const Films_Api = ' http://localhost:3000/films'
document.addEventListener('DOMContentLoaded',()=>{
    // craete movies list
    const menuLists=(names)=>{
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('card' ,'col-12')
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const mealList= document.getElementsByClassName('menu_list')
        const menu_list= document.getElementsByClassName('menu_list')
        const information = document.getElementById('Information')
        const image = document.getElementById('poster')
        const movie = document.getElementById('movie')
        const menu = document.getElementById('menu')
        const container = document.getElementById('container')
        const times = document.getElementsById('times')


    }
      function showtime(){
        let dateTime = new Date ()
        let time =dateTime.toLocalString()
        const times = document.getElementById('times')
        times.innerHTML=`
         ${time}
        `
      }
      let display = setInterval(showtime,1)
    // creating funtion of the top most movies
    const topMovies = ()=>{
        fetch (Films_Api)
        .then((response)=>response.json())
        .then((data)=>{
            
            const filmData = data[0];
            const poster  = filmData.poster
            const title = filmData.title
            const runtime = filmData.runtime
            const showtime = filmData.showtime
            const tickets_sold =filmData.tickets_sold
            const capacity =filmData.capacity
            const availableTickets = +capacity- +tickets_sold
            const soldTickets = +capacity -(+tickets_sold+ +1)
            
        const information = document.getElementById('Information')
        const image = document.getElementById('poster')
            
            information.innerHTML=`
            <h3 id="info ">Information</h3>
            <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li>Available-Tickets: ${availableTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
            `
            image.src=poster
            information.querySelector('#btn').addEventListener('click',(updateData)=>{
                information.innerHTML = `
                <h3 id="info ">Information</h3>
                <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li>Available-Tickets: ${soldTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
                 `
               })    
         })
        }
       
         // creating menu of the films
        const moviesList = () =>{
            fetch(Films_Api)
            .then((response)=>response.json())
            .then((data)=>{
                data.map(item=>{
                    const filmsMenu = item.title
                    const menu_lists= document.getElementById('menu_lists')
                    const movies = document.createElement('li')
                    movies.addEventListener('click',()=>{
                        const i = item.id
                        displays(data[i-1])
                    })
                    movies.innerHTML= `${filmsMenu}`
                    menu_lists.appendChild(movies)
                   })   
            })
        }
        // displaying data of the whole movies
        const displays = (filmData)=>{
            fetch (Films_Api)
        .then((response)=>response.json())
        .then((data)=>{
            data.forEach(element => {
                const poster  = filmData.poster
                const title = filmData.title
                const runtime = filmData.runtime
                const showtime = filmData.showtime
                const tickets_sold =filmData.tickets_sold
                const capacity =filmData.capacity
                const availableTickets = +capacity- +tickets_sold
                const soldTickets = +capacity -(+tickets_sold+ +1)
                
            const information = document.getElementById('Information')
            const image = document.getElementById('poster')
            information.innerHTML=`
            <h3 id="info ">Information</h3>
            <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li>Available-Tickets: ${availableTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
            `
            image.src=poster
            // adding event listerner to update buying of movies
            information.querySelector('#btn').addEventListener('click',()=>{
                information.innerHTML = `
                <h3 id="info ">Information</h3>
                <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li>Available-Tickets: ${soldTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
                `   
               })    
            })
                   
            });
        }
        // calling functions
    moviesList()
    topMovies();
    showtime();
})