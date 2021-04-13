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

const Companies = ({companies}) => (
  <Container>
    {companies.length > 0 ? companies.map((company) => (
      <Content>
        <Image
          bgImage={
            company.logo_path
              ? `https://image.tmdb.org/t/p/w200${company.logo_path}`
              : require("../assets/noPosterSamll.png")
          }
        />
        <Name>{company.name ? company.name : ''}</Name>
      </Content>
    )) : 'Can not find Companies'
    }
  </Container>
);

Companies.propTypes = {
  companies: PropTypes.object,
};

export default Companies;

