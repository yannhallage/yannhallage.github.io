import { motion } from "motion/react";
import { data_projetcs, data_projects_descrip, data_projects_title } from '../data/data_projects'
import { Context } from "../context/context";
import { useContext, useEffect } from "react";
import Alternative from "../alternative";
import Views from "./views";


const Projects = () => {
    const { setState } = useContext(Context);

    useEffect(() => {
        console.log(data_projetcs)
    }, [])
    return (
        <>
            <section >
                <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Projects</span>
                <motion.span className=" text-[13px]md:text-2xl text-base float-end cursor-pointer text-neutral-300"
                    onClick={() => {
                        setState(
                            <Alternative />
                        );
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                ><i class="fa-solid fa-arrow-left"></i></motion.span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                <motion.div
                    className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {data_projetcs.map((project, index) => {
                        return (
                            <a className="rounded-md"
                                onClick={() => {
                                    console.log(index)
                                    setState(
                                        <Views />   
                                    )
                                }}
                            >
                                <div className="relative">
                                    <img
                                        alt="Een afbeelding gerelateerd aan dit project"
                                        src={project}
                                        width={300}
                                        height={50}
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full aspect-video mb-4 rounded-lg object-cover"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <h3 className="text-base text-white md:text-largest mb-1 md:mb-2">
                                    {data_projects_title[index]}
                                </h3>
                                <p className="dark:text-white/40">
                                    {
                                        data_projects_descrip[index]
                                    }
                                </p>
                            </a>
                        )
                    })}
                </motion.div>
            </section>
        </>
    )
}
export default Projects;
