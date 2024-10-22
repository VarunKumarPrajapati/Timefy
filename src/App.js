import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
