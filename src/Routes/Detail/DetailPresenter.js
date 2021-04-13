import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";
import {Route, Link, withRouter} from "react-router-dom";
import Video from "../../Components/Video";
import Seasons from "../../Components/Seasons";
import Companies from "../../Components/Companies";
import Countries from "../../Components/Countries";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 3;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const ImdbButton = styled.button`
  background-color: #ffd711;
  color: black;
  border-radius: 5px;
  padding: 7px;
  font-weight: 600;
  margin-left: 15px;
`;
const TabGroup = styled.ul`
  display: flex;
  margin-top: 15px;
`;
const TabItem = styled.li`
  width: 120px;
    height:40px;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${props => (props.active ? "#3498db" : "transparent")};
    border-bottom: 3px solid white;
    transition: background-color 0.5s ease-in-out;
`;

const TabLink = styled(Link)`
    height: 40px;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DetailPresenter = withRouter(
  ({location: {pathname}, result, loading, error}) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Nomflix</title>
        </Helmet>
        <Loader/>
      </>
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomfilix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSamll.png")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0.4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
              </Item>
              <Item>
                <ImdbButton
                  onClick={() =>
                    window.open(
                      `https://www.imdb.com/title/${result.imdb_id}`,
                      "_blank"
                    )
                  }
                >
                  {result.imdb_id ? "IMDB" : "No IMDB"}
                </ImdbButton>
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>

            <TabGroup>
              <TabItem
                active={
                  result.original_title
                    ? pathname === `/movie/${result.id}/videos`
                    : pathname === `/show/${result.id}/videos`
                }
              >
                <TabLink
                  to={
                    result.original_title
                      ? `/movie/${result.id}/videos`
                      : `/show/${result.id}/videos`
                  }
                >
                  videos
                </TabLink>
              </TabItem>
              <TabItem
                active={
                  result.original_title
                    ? pathname === `/movie/${result.id}/companies`
                    : pathname === `/show/${result.id}/companies`
                }
              >
                <TabLink
                  to={
                    result.original_title
                      ? `/movie/${result.id}/companies`
                      : `/show/${result.id}/companies`
                  }
                >
                  companies
                </TabLink>
              </TabItem>
              <TabItem
                active={
                  result.original_title
                    ? pathname === `/movie/${result.id}/countries`
                    : pathname === `/show/${result.id}/countries`
                }
              >
                <TabLink
                  to={
                    result.original_title
                      ? `/movie/${result.id}/countries`
                      : `/show/${result.id}/countries`
                  }
                >
                  countries
                </TabLink>
              </TabItem>
              {result.original_title ? (
                ""
              ) : (
                <TabItem
                  active={
                    result.original_title
                      ? pathname === `/movie/${result.id}/seasons`
                      : pathname === `/show/${result.id}/seasons`
                  }
                >
                  <TabLink
                    to={
                      result.original_title
                        ? `/movie/${result.id}/seasons`
                        : `/show/${result.id}/seasons`
                    }
                  >
                    seasons
                  </TabLink>
                </TabItem>
              )}
            </TabGroup>
            <Route
              path={["/movie/:id/videos", "/show/:id/videos"]}
              children={<Video videos={result.videos.results}/>}
            />
            <Route
              path={["/movie/:id/companies", "/show/:id/companies"]}
              children={<Companies companies={result.production_companies}/>}
            />
            <Route
              path={["/movie/:id/countries", "/show/:id/countries"]}
              children={<Countries countries={result.production_countries}/>}
            />
            <Route
              path="/show/:id/seasons"
              children={<Seasons seasons={result.seasons}/>}
            />
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
