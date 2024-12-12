import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-white">
      <div className="text-center w-full">
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
