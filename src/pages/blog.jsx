import { motion } from "motion/react";

import { Context } from "../context/context";
import { useContext } from "react";
import Alternative from "../alternative";

const Blog = () => {
    const { state, setState } = useContext(Context);
    return (
        <>
            <section>
                <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Experience</span>
                <span className=" text-[13px]md:text-2xl text-base float-end cursor-pointer text-neutral-300"
                    onClick={() => {
                        setState(
                            <Alternative />
                        );
                    }}
                ><i class="fa-solid fa-arrow-left"></i></span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >

                </motion.div>
            </section>
        </>
    )
}
export default Blog;