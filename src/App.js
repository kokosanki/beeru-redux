
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



// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { getProducts } from "./actions/stateActions";

// const App = ({dispatch}) => {
//   let products = []
//     useEffect(() => {
//       fetch('https://api.punkapi.com/v2/beers')
//       .then(res => res.json())
//       .then(
//         result => {
//           products = result
//           dispatch(getProducts(result));
//           console.log(products)
//         },
//         error => {
//         console.log(error)
//         },
//       );
//     }, []);
  

    
//     console.log('The products  ' + products)
//     return (
//       <div className="App">
//         <ul className="Products">
          

//         </ul>
//       </div>
//     );
//   }

// export default connect()(App);
