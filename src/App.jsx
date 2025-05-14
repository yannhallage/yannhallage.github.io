import React from "react";

import Header from "./components/header";
import './style/index.css'
import Section from "./components/section";
function App() {
  return (
    <>
    <main>
      <Header />
      {/*  */}
      <section className="container mx-auto p-3 mt-5">
        <Section />
      </section>
    </main>
    </>
  );
}

export default App;
