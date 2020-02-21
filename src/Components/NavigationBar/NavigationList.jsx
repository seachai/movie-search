import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/actions";
import { isSelected } from "./isSelected";
import NavigationListItem from "./NavigationListItem";

const pathLinks = {
  nowPlaying: "/now-playing",
  upcoming: "/upcoming",
  trending: "/trending"
};

const NavigationList = () => {
  const dispatch = useDispatch();
  const pathName = window.location.pathname;
  const { nowPlaying, upcoming, trending } = pathLinks;
  const { fetchMovies } = actions.movieActions;
  const nowPlayingMovies = "/movie/now_playing";
  const upcomingMovies = "/movie/upcoming";
  const trendingMovies = "/trending/all/week";

  return (
    <nav>
      <ul>
        <NavigationListItem
          path={nowPlaying}
          label={"Now Playing"}
          dispatch={dispatch(fetchMovies(nowPlayingMovies))}
          isSelected={isSelected(pathName, nowPlaying)}
        />
        <NavigationListItem
          path={upcoming}
          label={"Upcoming"}
          dispatch={dispatch(fetchMovies(upcomingMovies))}
          isSelected={isSelected(pathName, upcoming)}
        />
        <NavigationListItem
          path={trending}
          label={"Trending"}
          dispatch={dispatch(fetchMovies(trendingMovies))}
          isSelected={isSelected(pathName, trending)}
        />
      </ul>
    </nav>
  );
};

export default NavigationList;
