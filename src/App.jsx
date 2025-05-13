import Header from "./components/header";
import Section_one from "./pages/section_one";
import Section from "./components/section";
import Footer from "./components/footer";
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
          {/*  */}
          <Footer />
        </section>
      </main>
    </>
  )
}
export default App;