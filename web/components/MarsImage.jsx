import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`;
  max-height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
`


const APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const HomePage = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const response = await axios.get(APOD_URL);
                setImageData(response.data);
            } catch (error) {
                console.error('Error fetching APOD data:', error);
            }
        };

        fetchAPOD();
    }, []);

    if (!imageData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>{imageData.title}</h1>
            <img width={'100%'} src={imageData.url} alt={imageData.title} />
            <p>{imageData.explanation}</p>
        </Container>
    );
};

export default HomePage;
