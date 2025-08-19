import { motion } from "motion/react";
import { Context } from "../context/context";
import { useContext, useEffect, useState } from "react";
import Projects from "./projects";
import { projets } from "../data/data_projects";
import { skill, skill_name } from "../data/skill";

const Views = () => {
    const { setState, indice } = useContext(Context);
    const [projects_indice, setProjects_indice] = useState(0);

    useEffect(() => {
        setProjects_indice(indice);
    }, [indice]);

    // Sécurité : éviter crash si indice pas défini
    const projet = projets[projects_indice] || projets[0];

    return (
        <section>
            <span className="text-[13px] md:text-2xl text-base text-neutral-300">
                Views
            </span>
            <motion.span
                className="text-[13px]  text-base float-end cursor-pointer text-neutral-300"
                onClick={() => {
                    setState(<Projects />);
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </motion.span>

            <hr className="text-secondary/5 dark:text-white/5 mb-4" />

            <motion.div
                className="mt-11"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="mb-16 overflow-hidden duration-200 motion-reduce:transition-none">
                    <h3 className="mb-2 text-2xl text-white font-bold tracking-[-0.03em]">
                        {projet.titre}
                    </h3>

                    <p className="mb-4 mt-2 text-neutral-700 dark:text-neutral-400 md:w-3/4">
                        {projet.description}
                    </p>

                    {/* Aperçu principal */}
                    <a target="_blank" rel="noopener noreferrer" href={projet.apercu}>
                        <img
                            alt={`${projet.titre} main screenshot`}
                            loading="lazy"
                            width={1920}
                            height={1080}
                            decoding="async"
                            className="aspect-video cursor-zoom-in rounded-xl border border-black/10 duration-200 hover:opacity-70 dark:border-neutral-800"
                            src={projet.apercu}
                            style={{ color: "transparent" }}
                        />
                    </a>
                    <section className="my-6 mb-16">
                        <h2
                            id="tech"
                            className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none text-white"
                        >
                            Captures
                            <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
                                .
                            </span>
                        </h2>
                        {/* <p className="text-neutral-700 dark:text-neutral-300">
                            Over the years, I have worked with a variety of technologies. Here
                            are some of the technologies I have experience with:
                        </p> */}

                        {/* Galerie des captures */}
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {projet.capture.map((cap, idx) => (
                                <div key={idx} className="overflow-hidden rounded-lg border border-black/10 dark:border-neutral-800">
                                    <a href={cap} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <img
                                            alt={`${projet.titre} capture ${idx + 1}`}
                                            src={cap}
                                            // width={"2000"}
                                            className="w-full  object-cover transition-transform duration-200 hover:scale-105 hover:opacity-80"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>

                    </section>
                    {/* Section technologies */}
                    <section className="my-6 mb-16">
                        <h2
                            id="tech"
                            className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none text-white"
                        >
                            Technologie utilisées{" "}
                            <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
                                .
                            </span>
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300">
                            Over the years, I have worked with a variety of technologies. Here
                            are some of the technologies I have experience with:
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4">
                            {projet.stack.map((tech, index) => (
                                <a
                                    key={index}
                                    className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
                                >
                                    {tech.url && (
                                        <img
                                            alt={`${tech.nom} logo`}
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            className="size-5 rounded"
                                            src={tech.url}
                                            style={{ color: "transparent" }}
                                        />
                                    )}
                                    {tech.nom}
                                </a>
                            ))}
                        </div>

                    </section>

                    {/* Liens externes (GitHub / Démo etc.) */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {projet.lien.map((l, idx) => (
                            <a
                                key={idx}
                                href={l}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 duration-200"
                            >
                                {l.includes("github") ? "Code Source" : "Démo"}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Views;
