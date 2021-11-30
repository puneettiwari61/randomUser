import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.testReducer);

  const handleClick = () => {
    dispatch(add({ count: count + 1 }));
  };

  return (
    <div className="App">
      <h1 onClick={handleClick}>Hello, World! cool {count}</h1>
    </div>
  );
};

export default App;
