import axios from "axios";

class HomepageAPI {
  static getMovie(movieId) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ab7f30f9bf0e2f6538b9870cb4856ef4`
    );
  }
}

export default HomepageAPI;
