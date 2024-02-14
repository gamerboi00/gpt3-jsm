import React from "react";

import { Blog, Footer } from "./containers";
import { Article, Brand } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Blog />
        <Article />
        <Footer />
        <Brand />
      </div>

      <h1>Brand</h1>
      <h1>Hi</h1>

      <h1>GPT-3</h1>
    </div>
  );
};

export default App;
