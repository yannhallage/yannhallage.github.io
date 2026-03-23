import { Context } from "../context/context";
import { useContext } from "react";
import Alternative from "../alternative";

const Blog = () => {
    const { setState } = useContext(Context);
    const experiences = [
        {
            title: "Projets personnels full stack",
            period: "En continu",
            description:
                "Conception et développement d'applications web de bout en bout : interface, API, base de données et déploiement.",
        },
        {
            title: "Apprentissage orienté architecture",
            period: "Dernières années",
            description:
                "Travail sur la structuration des applications, la lisibilité du code et la performance globale des systèmes.",
        },
        {
            title: "Veille technique et partage",
            period: "Régulier",
            description:
                "Exploration de nouvelles technologies et documentation des retours d'expérience pour progresser durablement.",
        },
    ];

    return (
        <>
            <section>
                <span className="text-base text-zinc-300 md:text-xl">Expériences</span>
                <span className="float-end cursor-pointer text-base text-zinc-300"
                    onClick={() => {
                        setState(
                            <Alternative />
                        );
                    }}
                ><i className="fa-solid fa-arrow-left"></i></span>
                <hr className="mb-4 mt-1 border-zinc-800" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {experiences.map((experience) => (
                        <article
                            key={experience.title}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5"
                        >
                            <p className="text-xs uppercase tracking-wide text-zinc-500">{experience.period}</p>
                            <h3 className="mt-2 text-base font-semibold text-zinc-100">{experience.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                {experience.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Blog;