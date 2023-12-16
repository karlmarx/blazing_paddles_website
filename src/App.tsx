import React from "react";
import "./App.css";
import "./index.css";
import MaterialNavbar from "./components/MaterialNavbar";
import InfoCarousel from "./components/InfoCarousel";
import { Typography } from "@material-tailwind/react";
import logo from "./assets/images/logoblazingpaddles.jpg"; // with import

function App() {
  return (
      <div
          className="App"
          style={{
            backgroundColor: "black",
            // width: '100px',
            // height: "95vh",

          }}
      >
{/*<div className="h-screen">*/}
<div className="flex flex-col">
    <div className="flex-none">
        <MaterialNavbar />
    </div>
<div className="flex-grow-0">
                  <InfoCarousel/>
</div>

          {/*</div>*/}

        {/*</div>*/}
        {/*</div>*/}
        {/*<header className="App-header text-3xl font-bold underline text-red-600">*/}
        {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
        {/*  <p>blazing paddles</p>*/}
        {/*</header>*/}
        {/*  </div>*/}
</div></div>
  );
}

export default App;
