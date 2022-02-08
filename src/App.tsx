import React from "react";
import { Header } from "./components/Header/Header";
import { DogsPage } from "./pages/DogsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DogsPage />
      </main>
    </div>
  );
}

export default App;
