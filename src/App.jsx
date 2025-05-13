import Header from "./components/header";
import Section_one from "./pages/section_one";
import Section from "./components/section";

const App = () => {
  return (
    <>
      <main className=""> 
        <Header />
        {/*  */}
        <section className="">
          <Section />
          {/* section_one */}
          <Section_one />
        </section>
      </main>
    </>
  )
}
export default App;