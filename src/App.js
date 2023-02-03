import React, { Suspense, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { callApi } from "./reducers/apiSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "character",
        output: "character",
      })
    );
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">Starting here</div>
    </Suspense>
  );
}

export default App;
