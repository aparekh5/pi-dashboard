import React from 'react';
import styled from "styled-components";
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
const Camera = () => {
    return (
        <Container>
            <h1>Camera Stream</h1>
            <video
                style={{
                    filter: 'blur(2px);'
                }}
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
                src={'/437.mp4'}
            >
                Your browser does not support the video tag.
            </video>
        </Container>
    );
};

export default Camera;
