import { motion } from "motion/react";

import { Context } from "../context/context";
import { useContext, useEffect, useState } from "react";
import Projects from "./projects";
import { data_projetcs, data_projects_descrip, data_projects_title } from '../data/data_projects'
import { skill, skill_name } from "../data/skill"

const Views = () => {
    const { setState, indice } = useContext(Context);
    const [projects_indice, setProjects_indice] = useState();

    useEffect(() => {
        setProjects_indice(indice);
    }, [indice])
    return (
        <>
            <section>
                <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Views </span>
                <motion.span className=" text-[13px]md:text-2xl text-base float-end cursor-pointer text-neutral-300"
                    onClick={() => {
                        setState(
                            <Projects />
                        );
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                ><i className="fa-solid fa-arrow-left"></i></motion.span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                <motion.div className="mt-11"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="mb-16 overflow-hidden duration-200 motion-reduce:transition-none">
                        <h3 className="mb-2 text-2xl text-white font-bold tracking-[-0.03em]">
                            {data_projects_title[projects_indice]}
                        </h3>
                        <p className="mb-4 mt-2 text-neutral-700 dark:text-neutral-400 md:w-3/4">
                            {data_projects_descrip[projects_indice]}
                        </p>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/assets/zenhostify/image.png"
                        >
                            <img
                                alt="Zenhostify main page screenshot"
                                loading="lazy"
                                width={1920}
                                height={1080}
                                decoding="async"
                                data-nimg="1"
                                className="aspect-video cursor-zoom-in rounded-xl border border-black/10 duration-200 hover:opacity-70 dark:border-neutral-800"
                                src={
                                    data_projetcs[projects_indice]
                                }
                                style={{ color: "transparent" }}
                            />
                        </a>

                        <div className="mt-4 flex flex-wrap gap-2">
                            
                        </div>

                        <section className="my-6 mb-16">
                            <h2 id="tech" className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none text-white">Technologie utilisées <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span></h2>
                            <p className="text-neutral-700 dark:text-neutral-300">Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>

                            <div className="mt-4 flex flex-wrap gap-4">
                                {
                                    skill.map((techn, index) => {
                                        return (
                                            <a className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5">
                                                <img alt="React logo" loading="lazy"
                                                    width="20" height="20" decoding="async"
                                                    data-nimg="1" className="size-5 rounded"
                                                    src={techn}
                                                    style={{ color: "transparent;" }} /> {skill_name[index]}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
export default Views;