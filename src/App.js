import React, { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        Starting here
      </div>
    </Suspense>
  );
}

export default App;
