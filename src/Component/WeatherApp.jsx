import { useState } from "react";
import React from 'react'
import { IoSearch } from "react-icons/io5";
import './weather.css'



function WeatherApp() {

    let api_key = "4b5ae1fcf337cc901f0f798669de0c14";
    // let api_key = "dd94f859a0e52d6e4767fddf735f04a7";
    const [weatherIcon, setWeatherIcon] = useState('/cloud.png');

    const search = async () => {
        const element = document.querySelector("#City");
        console.log('Function Executed');
        if (!element || element.value === "") {
            console.log('Invalid Search');
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("huminityPer");
        const wind = document.getElementsByClassName("windSpeed");
        const temperature = document.getElementsByClassName("weatherTemp");
        const location = document.getElementsByClassName("weatherLocation");
        const mint = document.getElementsByClassName("minTemp");
        const maxt = document.getElementsByClassName("maxTemp");
        const feel = document.getElementsByClassName("feelsLike");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "Km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;
        mint[0].innerHTML = "Minimum Temprature : " + Math.floor(data.main.temp_min) + "°C";
        maxt[0].innerHTML = "Maximum Temprature : " + Math.floor(data.main.temp_max) + "°C";
        feel[0].innerHTML = "Feels like : " + Math.floor(data.main.feels_like) + "°C";;


        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWeatherIcon('/clear.png');
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWeatherIcon('/cloud.png');
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWeatherIcon('/drizzle.png');
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWeatherIcon('/drizzle.png');
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWeatherIcon('/rain.png');
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWeatherIcon('/rain.png');
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWeatherIcon('/snow.png');
        }
        else {
            setWeatherIcon('/clear.png')
        }
    };
    return (
        <div className=" py-5 bg-black  min-h-screen flex items-center justify-center">
            <div className='container rounded-[10%] shadow-purple-400 shadow-xl bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 h-auto sm:h-[85vh] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] pt-10 border-t-2 border-gray-500'>
                <div className="topbar flex justify-center gap-2">
                    <input type="text" name="CityName" id='City' className='cityInput h-12 w-80 rounded-[40px] pl-3 text-xl pb-1 hover:border-2 hover:border-blue-600' placeholder='Enter City Name' />
                    <div onClick={() => { search() }} className='searchIcon text-3xl h-12 w-12 items-center bg-white rounded-full cursor-pointer justify-center flex hover:border-2 hover:border-blue-600'><IoSearch /></div>
                </div>
                <div className="weatherImage justify-center items-center flex">
                    <img src={weatherIcon} alt="Weather Icon" />
                </div>
                <div className="minTemp flex justify-center items-center font-bold text-white text-[15px]">Minimum Temprature: 00 °C</div>
                <div className="weatherTemp flex justify-center items-center font-bold text-white text-[55px]">00 °C</div>
                <div className="maxTemp flex justify-center items-center font-bold text-white text-[15px]">Maximum Temprature: 00 °C </div>
                <div className="feelsLike flex justify-center font-bold text-white text-[15px]">Feels Like</div>


                <div className="weatherLocation flex justify-center font-bold pt-2 text-white text-[30px]">City Name</div>
                <div className="dataContainer flex mt-8 gap-20 justify-center">
                    <div className="elememt flex gap-5 justify-cente">
                        <img src={'/humidity.png'} alt="icon" className='icon object-contain' />
                        <div className="data flex flex-col justify-center items-center">
                            <div className="huminityPer text-2xl text-white font-bold">00%</div>
                            <div className="text-white  ">Huminity</div>
                        </div>
                    </div>
                    <div className="elememt flex gap-5 justify-center ">
                        <img src={'/wind.png'} alt="icon" className='icon object-contain' />
                        <div className="data flex flex-col justify-center items-center">
                            <div className="windSpeed text-2xl text-white font-bold">00 Km/h</div>
                            <div className="text-white">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WeatherApp
