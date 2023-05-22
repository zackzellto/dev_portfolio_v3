import { useState } from "react";
import "./index.css";
import GreetingHeader from "./components/greeting/GreetingHeader";
import Navbar from "./components/navbar/Navbar";
import MinimalistCodeBlock from "./components/minimalist-code-block/MinimalistCodeBlock";

function App() {
  return (
    <>
      <Navbar />
      <div className="items-center justify-center p-8">
        <div className="lg:grid lg:grid-cols-2 ">
          <GreetingHeader />
          <MinimalistCodeBlock />
        </div>
      </div>
    </>
  );
}

export default App;
