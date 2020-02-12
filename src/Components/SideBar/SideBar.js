import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/actions";
import "./SideBar.scss";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navigation-bar">
      <ul>
        <li
          className="navigation-bar__link"
          onClick={() => dispatch(actions.movieActions.fetchNowPlayingMovies())}
        >
          Now Playing
        </li>
        <li
          className="navigation-bar__link"
          onClick={() => dispatch(actions.movieActions.fetchUpcomingMovies())}
        >
          Upcoming
        </li>
        <li
          className="navigation-bar__link"
          onClick={() => dispatch(actions.movieActions.fetchTrendingMovies())}
        >
          Trending
        </li>
        <li className="navigation-bar__link">Favorites</li>
        <li className="navigation-bar__link">Watch Later</li>
      </ul>
    </div>
  );
};

export default SideBar;
