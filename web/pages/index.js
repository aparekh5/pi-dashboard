import Head from 'next/head'
import styled from 'styled-components'
import WeatherClock from "@/components/WeatherClock";
import StockPrices from "@/components/StockPrices";
import MarsImage from "@/components/MarsImage";
import LatestNews from "@/components/LatestNews";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  width: 100vw;
`
const GridItem = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  font-size: 30px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Pi Dashboard</title>
      </Head>
      <Container>
          <WeatherClock/>
          <StockPrices/>
          <MarsImage/>
          <LatestNews/>
        <GridItem>Item 5</GridItem>
          <GridItem>An IOT project by Aryaman Parekh, Peter Chiu, Kartik Mehra</GridItem>
      </Container>
    </>
  )
}
