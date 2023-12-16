import React from "react";
import "./App.css";
import "./index.css";
import MaterialNavbar from "./components/MaterialNavbar";
import { Typography } from "@material-tailwind/react";
import logo from "./assets/images/logoblazingpaddles.jpg"; // with import

function App() {
  return (
      <div
          className="App"
          style={{
            backgroundColor: "black",
            // width: '100px',
            height: "100vh",
          }}
      >
        <MaterialNavbar />

        {/*<div className="text-align-center">*/}
        {/*<div className="flex justify-content-center align-items-center">*/}
        <div className="hidden md:inline-flex my-10 shadow rounded-sm w-full  justify-center">
          <div>
            <img
                className="h-96 w-96 rounded-full object-cover object-center"
                src={logo}
            />
          </div>
        </div>
        <div>
          <p>
            <Typography variant="h1" color="yellow" textGradient>
              Blazing Paddles
            </Typography>
          </p>
        </div>
        {/*</div>*/}
        {/*</div>*/}
        {/*<header className="App-header text-3xl font-bold underline text-red-600">*/}
        {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
        {/*  <p>blazing paddles</p>*/}
        {/*</header>*/}
      </div>
  );
}

export default App;
