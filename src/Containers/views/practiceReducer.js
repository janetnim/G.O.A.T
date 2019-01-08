import React, { useReducer } from "react";

const initialState = {
  isFetching: false,
  success: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_MOVIES": {
      return { isFetching: true };
    }
    case "FETCHING_MOVIES_SUCCESS": {
      return { isFetching: false, success: true };
    }
    case "FETCHING_MOVIES_FAILURE": {
      return { isFetching: false, success: false };
    }
    default: {
      return state;
    }
  }
};

const delayFunc = setTimeout(() => {
  console.log("Waiting for 10 seconds");
}, 10000);

export default function practiceReducer() {
  const [{ isFetching, success }, dispatch] = useReducer(reducer, initialState);
  const handleData = () => {
    dispatch({ type: "FETCHING_MOVIES" });
    delayFunc();
    dispatch({ type: "FETCHING_MOVIES_SUCCESS" });
    delayFunc();
    dispatch({ type: "FETCHING_MOVIES_FAILURE" });
    delayFunc();
  };

  return (
    <React.Fragment>
      <div className="isFetching">{isFetching}</div>
      <div className="success">{success}</div>
      <button onClick={handleData} />
    </React.Fragment>
  );
}
