import { Context } from "../context/context";
import { useContext, useEffect, useState } from "react";
import Projects from "./projects";
import { projets } from "../data/data_projects";

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
            <span className="text-base text-zinc-300 md:text-xl">
                Détail du projet
            </span>
            <span
                className="float-end cursor-pointer text-base text-zinc-300"
                onClick={() => {
                    setState(<Projects />);
                }}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </span>

            <hr className="mb-4 mt-1 border-zinc-800" />

            <div className="mt-6">
                <div className="mb-16 overflow-hidden">
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-100">
                        {projet.titre}
                    </h3>

                    <p className="mb-6 mt-2 leading-relaxed text-zinc-400 md:w-3/4">
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
                            className="aspect-video cursor-zoom-in rounded-xl border border-zinc-800 transition hover:opacity-90"
                            src={projet.apercu}
                            style={{ color: "transparent" }}
                        />
                    </a>
                    <section className="mb-16 mt-8">
                        <h2
                            id="tech"
                            className="mb-2 text-xl font-semibold text-zinc-100"
                        >
                            Captures
                        </h2>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {projet.capture.map((cap, idx) => (
                                <div key={idx} className="overflow-hidden rounded-lg border border-zinc-800">
                                    <a href={cap} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <img
                                            alt={`${projet.titre} capture ${idx + 1}`}
                                            src={cap}
                                            className="w-full object-cover transition hover:opacity-85"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>

                    </section>
                    {/* Section technologies */}
                    <section className="my-6 mb-16">
                        <h2
                            id="tech-stack"
                            className="mb-2 text-xl font-semibold text-zinc-100"
                        >
                            Technologies utilisées
                        </h2>
                        <p className="text-sm text-zinc-400">
                            Stack principale utilisée sur ce projet.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4">
                            {projet.stack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm font-medium text-zinc-300"
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
                                </div>
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
                                className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-1 text-sm text-zinc-200 transition hover:bg-zinc-900"
                            >
                                {l.includes("github") ? "Code Source" : "Démo"}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Views;
