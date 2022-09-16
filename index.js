



function namaz() {
    let city=document.querySelector('#weathers').value
    axios.get(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=Pakistan&method=2&month=09&year=2022`)
    .then((response) => {
        console.log(response.data)
        console.log(response.data.data[0].date.gregorian.date)


        document.querySelector('.others').innerHTML=    `
            
        
        <div class="weather-item">
        <div>Fajar</div>
        <div>${response.data.data[15].timings.Fajr} </div>
        </div>
        </div><div class="weather-item">
        <div>Sunrise</div>
        <div>${response.data.data[15].timings.Sunrise} </div>
        </div>
        <div class="weather-item">
        <div>Duhr</div>
        <div>${response.data.data[15].timings.Dhuhr} </div>
        </div><div class="weather-item">
        <div>Asr</div>
        <div>${response.data.data[15].timings.Asr} </div>
        </div><div class="weather-item">
        <div>Maghrib</div>
        <div>${response.data.data[15].timings.Maghrib} </div>
        </div><div class="weather-item">
        <div>Issha</div>
        <div>${response.data.data[15].timings.Isha} </div>
        
        
        `

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc01c173f257e8b5b606f8771a1e900d&units=metric`)
        .then(function (response) {
          
           document.querySelector('.place-container').innerHTML= ` 
            <div class="time-zone" id="time-zone">${response.data.name}</div>
            <div id="country" class="country">${response.data.sys.country}</div>`
    }).catch(function (err){

    })
    document.querySelector('#date').innerHTML= `
              <div id="dates"> ${moment().format("dddd, D MMM")} </div>`

        let divdata= document.querySelector('#weather-forecast')
           divdata.innerHTML="";
response.data.data.map(eachitem=>{
    divdata.innerHTML +=   ` 
              
                <div class="weather-forecast-item">
               <div class="day">${moment(eachitem.date.readable).format('ddd  Do/MMM')}</div>

               <div class="day">Fajr ${eachitem.timings.Fajr}</div>
               
               <div class="day">Duhr ${eachitem.timings.Dhuhr}</div>
            
                <div class="day">Asar${eachitem.timings.Asr} </div>
                <div class="day">Maghrib ${eachitem.timings.Maghrib}</div>
                <div class="day">Isha ${eachitem.timings.Isha}</div>

             </div>`

})



    }).catch((err) => {
        console.log(err)
    });
}

// function getWeathers() {

//     //Weather Now
//     let city = document.querySelector('#weathers').value
//     document.querySelector('#time').innerHTML=` <div id="times">${moment().format("hh:MM A")}</div>`


//     //let weatherNow=document.querySelector('.others');
//   //  weatherNow.innerHTML="";
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc01c173f257e8b5b606f8771a1e900d&units=metric`)
//         .then(function (response) {
//             console.log(response.data)

          

        //    document.querySelector('.place-container').innerHTML= ` 
        //     <div class="time-zone" id="time-zone">${response.data.name}</div>
        //     <div id="country" class="country">${response.data.sys.country}</div>`
           
            
//             document.querySelector('.others').innerHTML=    `
            
//         <div class="weather-item">
//         <img src="" id="icon"/>
//         </div>
//         <div class="weather-item">
//         <div>Now</div>
//         <div>${response?.data?.main.temp.toFixed(01)} &#8451</div>
//         </div>
//          <div class="weather-item">
//         <div>Max Temp</div>
//         <div>${response?.data?.main?.temp_max.toFixed(01)} &#8451</div>
//         </div>  <div class="weather-item">
//         <div>Min Temp</div>
//         <div>${response?.data?.main?.temp_min.toFixed(01)} &#8451</div>
//         </div>
//         <div class="weather-item">
//         <div>Humidity</div>
//         <div>${response.data.main.humidity.toFixed(1)} &#8451</div>
//         </div>
//         <div class="weather-item">
//         <div>feel like</div>
//         <div>${response.data.main.feels_like.toFixed(1)} &#8451</div>
//         </div>
//         `
//         document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

//         }).catch(function (error) {
//             console.log(error)
//         })


//             //Get 5 day data


            
//         axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fc01c173f257e8b5b606f8771a1e900d&units=metric`)
//         .then(function(response){
//            console.log( response.data)

         
//            document.querySelector('#date').innerHTML= `
//           <div id="dates"> ${moment(response.data.list[0].dt_txt).format("dddd, D MMM")} </div>  `

           
//            let divdata= document.querySelector('#weather-forecast')
//            divdata.innerHTML="";
//            response.data.list.map(eachitem=>{
//             divdata.innerHTML +=   ` 
              
//             <div class="weather-forecast-item">
//            <div class="day">${moment(eachitem.dt_txt).format('ddd   ')}</div>
           
//            <div class="day">${moment(eachitem.dt_txt).format('hh:00 a')}</div>
//            <img src="http://openweathermap.org/img/wn/${eachitem.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
//             <div class="temp">${eachitem.main.temp_min.toFixed(0)} &#176;C - ${response.data.list[0].main.temp_min.toFixed(0)} &#176;C</div>
//             <div class="temp">feel like ${eachitem.main.feels_like} &#176;C</div>
//         </div>`
//         })

          

//      //  http://openweathermap.org/img/wn/10d@2x.png
//        //document.querySelector("#w-icon").innerHTML = `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`


//         }).catch(function (error){
//             console.log(error.data)
//         })
        




// }