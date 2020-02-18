export const setTitle = (path) => {
  switch (path) {
    case "/now-playing": {
      return "Now Playing";
    }
    case "/upcoming": {
      return "Upcoming Movies";
    }
    case "/trending": {
      return "Trending Movies";
    }
    default: {
      return "Please enter a search";
    }
  }
};
