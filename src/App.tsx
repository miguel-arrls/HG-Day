import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayPage from "./page/bdayPage";
import BirthdayIntro from "./components/bdayIntro";

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleIntroComplete = () => {
    setShowMainPage(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              showMainPage ? (
                <BirthdayPage showAnimations={true} />
              ) : (
                <BirthdayIntro onComplete={handleIntroComplete} />
              )
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;