import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
`;
const Item = styled.div``;
const Type = styled.button`
background-color: black;
:hover{
  background-color: cornflowerblue;
}
color: white;
border: 3px solid cornflowerblue;
border-radius: 10px;
margin: 5px;
padding: 10px;
font-size: 15px;
cursor:pointer;
`;
const Name = styled.span``;

const Videos = ({videos}) => (
  <Container>
    {videos.length > 0 ? videos.map((video) => (
      <Item>
        <Type onClick={() =>
          window.open(
            `https://www.youtube.com/watch?v=${video.key}`,
            "_blank"
          )
        }>Watch {video.type ? video.type : ''}</Type>
        <Name>{video.name ? video.name : ''}</Name>
      </Item>
    )) : 'Can not find Videos'
    }
  </Container>
);

Videos.propTypes = {
  videos: PropTypes.object,
};

export default Videos;

