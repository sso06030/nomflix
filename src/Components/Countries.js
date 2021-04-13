import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
`;
const Title = styled.div`
font-size: 17px;
font-weight: 600;
margin-bottom: 10px;
`;
const Name = styled.div`
font-size: 16px;
margin-bottom: 5px;
`;

const Countries = ({countries}) => (
  <Container>
    <Title>Production Countries</Title>
    {countries.length>0?countries.map((country) => (
      <>
        <Name>✅ {country.name?country.name:''}</Name>
      </>
    )):'Can not find Countries'
    }
  </Container>
);

Countries.propTypes = {
  countries: PropTypes.object,
};

export default Countries;

