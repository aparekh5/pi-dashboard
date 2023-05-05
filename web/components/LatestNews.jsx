import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios  from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  overflow: scroll;
`

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 100%;
`

const NewsItem = styled.a`
    margin: 5px;

`


function Item({url, title}) {
    return <NewsItem href={url} target='_blank'>
        {title}
    </NewsItem>
}

function LatestNews(props) {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=74b05b53fb07416296af5319b0b3cc1c').then(res => {
            setNews(res.data.articles)
            console.log(res.data.articles)
    })})

    return (
        <Container>Latest News
            <NewsList>
                {
                    news.map((a, idx) => <Item key={idx} url={a.url} title={a.title}/>)
                }
            </NewsList>

        </Container>
    );
}

export default LatestNews;