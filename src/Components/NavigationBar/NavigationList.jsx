import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/actions";
import { isSelected } from "./isSelected";
import NavigationListItem from "./NavigationListItem";

const PathLinks = {
  nowPlaying: "/now-playing",
  upcoming: "/upcoming",
  trending: "/trending"
};

const NavigationList = () => {
  const dispatch = useDispatch();
  const pathName = window.location.pathname;

  return (
    <nav>
      <ul>
        <NavigationListItem
          path={PathLinks.nowPlaying}
          label={"Now Playing"}
          dispatch={dispatch(actions.movieActions.fetchNowPlayingMovies())}
          isSelected={isSelected(pathName, PathLinks.nowPlaying)}
        />
        <NavigationListItem
          path={PathLinks.upcoming}
          label={"Upcoming"}
          dispatch={dispatch(actions.movieActions.fetchUpcomingMovies())}
          isSelected={isSelected(pathName, PathLinks.upcoming)}
        />
        <NavigationListItem
          path={PathLinks.trending}
          label={"Trending"}
          dispatch={dispatch(actions.movieActions.fetchTrendingMovies())}
          isSelected={isSelected(pathName, PathLinks.trending)}
        />
      </ul>
    </nav>
  );
};

export default NavigationList;
