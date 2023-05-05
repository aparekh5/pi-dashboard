import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const API_BASE_URL = 'https://api.coingecko.com/api/v3/';

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CryptoPrices = () => {
    const [cryptoPrices, setCryptoPrices] = useState([]);

    useEffect(() => {
        getCryptoPrices();
        const interval = setInterval(() => {
            getCryptoPrices();
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getCryptoPrices = async () => {
        const ids = 'bitcoin,ethereum,ripple,chainlink,polkadot';
        const { data } = await axios.get(`${API_BASE_URL}simple/price?ids=${ids}&vs_currencies=usd`);
        setCryptoPrices(data);
    };

    return (
        <Container>
            <Price>Bitcoin: ${cryptoPrices.bitcoin?.usd.toFixed(2)}</Price>
            <Price>Ethereum: ${cryptoPrices.ethereum?.usd.toFixed(2)}</Price>
            <Price>Ripple: ${cryptoPrices.ripple?.usd.toFixed(2)}</Price>
            <Price>Chainlink: ${cryptoPrices.chainlink?.usd.toFixed(2)}</Price>
            <Price>Polkadot: ${cryptoPrices.polkadot?.usd.toFixed(2)}</Price>
        </Container>
    );
};

export default CryptoPrices;
