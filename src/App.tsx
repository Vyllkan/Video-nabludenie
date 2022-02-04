import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header/header";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
