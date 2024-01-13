// pages/index.js

import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; /* Set a maximum width if desired */
  margin: 0 auto; /* Center the container */
`;

const YoutubeVideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10%; /* 16:9 aspect ratio for responsive sizing */
  padding-top: 5%;
  padding-left: 10%;
  position: relative;

  /* Responsive styles for smaller devices */
  @media (max-width: 600px) {
    
    padding-bottom: 15%; /* Adjust the aspect ratio for small screens */
  }

  /* Additional media queries for other breakpoints if needed */
  @media (min-width: 601px) and (max-width: 1024px) {
    padding-bottom: 66.67%; /* Adjust the aspect ratio for medium screens */
  }

  @media (min-width: 1025px) {
    /* Larger screens, reset to the original aspect ratio if necessary */
  }
`;

export default class IndexPage extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YoutubeContainer>
        <YoutubeVideoWrapper>
          <YouTube
            videoId="2wf_JJPvOE0?si=5WtHRIsO995BVYOJ"
            opts={opts}
            onReady={this._onReady}
          />
        </YoutubeVideoWrapper>
      </YoutubeContainer>
    );
  }
}
