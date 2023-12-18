import React from "react";
import "./App.css";
import "./index.css";
import MaterialNavbar from "./components/MaterialNavbar";
import { Typography } from "@material-tailwind/react";
import logo from "./assets/images/logoblazingpaddles.jpg"; // with import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import InfoCarousel from "./components/InfoCarousel";
import {Error404} from "./components/Error404";
import MaterialNavbar2 from "./components/MaterialNavbar2";

function App() {
    return (
      <div
          className="App"
          style={{
            // backgroundColor: "black",
            // width: '100px',
            // height: "95vh",

          }}
      >


          <Router>
              {/*<div className="flex flex-col">*/}
              {/*<div className="flex-none">*/}
          <MaterialNavbar />
          {/*<MaterialNavbar2 />*/}
              {/*</div>*/}
              <Routes>
                  <Route  path="/" element={<Home/>} />
                  <Route path="/about" element={<Home/>} />

                  <Route  path="*" element={<Error404/>} />



              </Routes>
          </Router>


</div>


  );
}

export default App;
