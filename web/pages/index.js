import Head from 'next/head'
import styled from 'styled-components'

const Heading = styled.div`
    
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Pi Dashboard</title>
      </Head>
      <main>
        <Heading>
Hello world
        </Heading>
      </main>
    </>
  )
}
