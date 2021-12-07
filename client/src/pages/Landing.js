import React from "react";

const Landing = () => {
  const styleFont = {
    fontFamily: "Audiowide"
  }

  return (
    <main>
      <div className="flex-row justify-content-center" >
        <h1 className ="text-center" style= {styleFont}>Stream.line</h1>
        <h5 className ="text-center">Log in or Sign up to start!</h5>
      </div>
    </main>
  );
};

export default Landing;
