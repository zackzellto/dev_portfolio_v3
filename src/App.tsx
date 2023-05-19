import { useState } from "react";
import "./index.css";
import GreetingHeader from "./components/greeting/GreetingHeader";

function App() {
  return (
    <div className="items-center justify-center p-8">
      <div className="flex flex-col">
        <GreetingHeader />
      </div>
    </div>
  );
}

export default App;
