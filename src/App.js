
import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <CurrentPage />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
