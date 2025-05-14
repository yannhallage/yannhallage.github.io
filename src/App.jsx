import React from "react";
import Realisation from "./components/realisation";
import Header from "./components/header";
import './style/index.css'
import Section from "./components/section";
import Footer from "./components/footer";
function App() {
  return (
    <>
    <main>
      <Header />
      {/*  */}
      <section className="container mx-auto p-3 space-y-17  md:p-11 mt-5">
        <Realisation />
        {/* realtisation */}
        <Section />
        {/*  */}
      </section>
        <Footer />
    </main>
    </>
  );
}

export default App;
