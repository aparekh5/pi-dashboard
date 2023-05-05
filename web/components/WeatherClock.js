'use client';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
`

const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  flex: 1;
`

const Weather = styled.div`
  flex: 1;
  font-size: 60px;
`

const API_KEY='2c53e317aa09b8a1e9f8a208153d0015'


function LiveTime() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeatherData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=40.1164&longitude=-88.2434&current_weather=true`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();

        const interval = setInterval(() => {
            fetchWeatherData();
        }, 3600000); // Fetch data every hour (3600000 milliseconds)

        return () => clearInterval(interval);
    }, []);


    const [isLoaded, setIsLoaded] =  useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
            setIsLoaded(true)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Container>
            {
            isLoaded && <>
            <Time>
                Time: {time.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' })}
            </Time>
            <Weather>
                    <p>Weather in Champaign:</p>
                    <p>Temperature: {Math.round(weatherData.current_weather.temperature)} °C</p>
            </Weather>
        </>
            }
        </Container>
    )
}

export default LiveTime
