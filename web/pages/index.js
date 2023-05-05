import Head from 'next/head'
import styled from 'styled-components'
import WeatherClock from "@/components/WeatherClock";

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
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Pi Dashboard</title>
      </Head>
      <Container>
          <WeatherClock/>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
      </Container>
    </>
  )
}
