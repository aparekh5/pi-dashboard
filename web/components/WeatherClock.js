import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Replace with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const WeatherClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherClock = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [clientRendered, setClientRendered] = useState(false);

    // Champaign, Illinois coordinates
    const latitude = 40.1164;
    const longitude = -88.2434;

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );

            const data = await response.json();
            setWeatherData(data);
        };

        fetchWeatherData();
    }, []);

    useEffect(() => {
        setClientRendered(true);
    }, []);

    useEffect(() => {
        if (!clientRendered) {
            return;
        }

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [clientRendered]);

    if (!clientRendered) {
        return null;
    }

    const renderWeatherIcon = () => {
        if (!weatherData) {
            return null;
        }

        const weatherCode = weatherData.weather[0].icon;
        const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherCode}.png`;

        return <WeatherIcon src={weatherIconUrl} alt="Weather icon" />;
    };

    const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    return (
        <WeatherClockWrapper>
            {renderWeatherIcon()}
            <div>{weatherData && weatherData.weather[0].description}</div>
            <div>{formattedTime}</div>
        </WeatherClockWrapper>
    );
};

export default WeatherClock;
