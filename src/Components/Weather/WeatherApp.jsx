import React, { useState } from 'react'
import './WeatherApp.css'


import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'


const  WeatherApp =()=> {

    let api_key ="cdb912d3a0da2620a393fa8e760b2d58";

    const [wicon,setWicon]=useState(cloud_icon);

    const search= async()=>{
        const element = document.getElementsByClassName('cityInput')
        if(element[0].value===""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        
        const response = await fetch(url);
        const data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-speed')
        const temperature = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')
   
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
        temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
        location[0].innerHTML=data.name;  
        
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" ){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" ){
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon);
        }
    }
    
  return (
<>

        <video autoPlay muted loop src="https://cdn.pixabay.com/vimeo/143492926/clouds-1154.mp4?width=480&hash=d2f753d2b6c07818fc6eb94764b671e65636e48f">
        </video>

    <div className='container'>

        
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-image">
            <img src={wicon} alt=""/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind-speed">18 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>

    </>
    

    
  )
}

export default WeatherApp