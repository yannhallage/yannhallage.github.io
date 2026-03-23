import { projets } from '../data/data_projects'
import { Context } from "../context/context";
import { useContext } from "react";
import Alternative from "../alternative";
import Views from "./views";


const Projects = () => {
    const { setState, setIndice } = useContext(Context);

    return (
        <>
            <section >
                <span className="text-base text-zinc-300 md:text-xl">Projets</span>
                <span className="float-end cursor-pointer text-base text-zinc-300"
                    onClick={() => {
                        setState(
                            <Alternative />
                        );
                    }}
                ><i className="fa-solid fa-arrow-left"></i></span>
                <hr className="mb-4 mt-1 border-zinc-800" />
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projets.map((project, index) => {
                        return (
                            <button
                                type="button"
                                key={project.id}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-left transition hover:border-zinc-700 hover:bg-zinc-900"
                                onClick={() => {
                                    setIndice(index)
                                    setState(
                                        <Views
                                        />
                                    )
                                }}
                            >
                                <div className="relative">
                                    <img
                                        alt={`Aperçu du projet ${project.titre}`}
                                        src={project.apercu}
                                        width={300}
                                        height={50}
                                        decoding="async"
                                        className="mb-4 aspect-video w-full rounded-lg border border-zinc-800 object-cover"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <h3 className="mb-1 text-base font-semibold text-zinc-100 md:mb-2">
                                    {project.titre}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    {project.description}
                                </p>
                                <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500">
                                    {project.stack.map((tech) => tech.nom).slice(0, 3).join(" • ")}
                                </p>
                            </button>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Projects;
