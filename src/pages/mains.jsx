

import Header from "../components/header";
import Footer from "../components/footer";
import { Context } from "../context/context";

import { useContext } from "react";

const Mains = () => {
    const { state } = useContext(Context)

    return (
        <>
            <main>
                <div className="">
                    <Header />
                </div>
                {/*  */}
                <section className="container mx-auto space-y-10 p-4 md:p-10">
                    { state }
                </section>
                <div className="">
                    <Footer />
                </div>
            </main>
        </>
    )
}
export default Mains;