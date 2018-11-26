import React from "react";
import PropTypes from "prop-types";

const HomePage = ({ movie }) => (
  <div class="container">
    <div class="row">{movie}</div>
  </div>
);

HomePage.propTypes = {
  movie: PropTypes.string.isRequired
}

export default HomePage;
