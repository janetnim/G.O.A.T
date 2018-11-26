import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actionCreators/home";
import { PropTypes } from "prop-types";
// import HomePage from "../../Components/Home";

function HomePageView() {
  const [movie, setMovie] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const { fetchMovie } = this.props;
    const movieId = 500;
    const response = fetchMovie(movieId);
    console.log("====================================");
    console.log(response);
    console.log("====================================");
    setMovie(response.data);
  });
  if (isFetching === true) {
    return "Loading...";
  }
  return (
    <div class="container">
      <div class="row">{movie}</div>
    </div>
  );
}

const mapStateToProps = ({ home }) => ({
  isFetching: home.isFetching,
  movie: home.movie,
  success: home.success
});

const mapDispatchToProps = {
  fetchMovie
};

HomePageView.propTypes = {
  fetchMovie: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageView);
