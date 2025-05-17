import { motion } from "motion/react";

import { Context } from "../context/context";
import { useContext } from "react";
import Projects from "./projects";

const Views = ({ index }) => {
    const { setState } = useContext(Context);

    if (index) {
        return console.log(index)
    }
    return (
        <>
            <section>
                <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Views</span>
                <motion.span className=" text-[13px]md:text-2xl text-base float-end cursor-pointer text-neutral-300"
                    onClick={() => {
                        setState(
                            <Projects />
                        );
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                ><i class="fa-solid fa-arrow-left"></i></motion.span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
            </section>
        </>
    )
}
export default Views;