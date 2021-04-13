import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
  height: 100vmin;
  width: 100vmin;
`;
const Content = styled.div`
  height:200px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  width: 200px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 200px;
  border-radius: 5px;
  margin-right: 20px;
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const Seasons = ({seasons}) => (
  <Container>
    {seasons.length > 0 ? seasons.map((season) => (
      <Content>
        <Image
          bgImage={
            season.poster_path
              ? `https://image.tmdb.org/t/p/w200${season.poster_path}`
              : require("../assets/noPosterSamll.png")
          }
        />
        <Name>{season.name ? season.name : ''}</Name>
      </Content>
    )) : 'Can not find Seasons'
    }
  </Container>
);

Seasons.propTypes = {
  seasons: PropTypes.object,
};

export default Seasons;

