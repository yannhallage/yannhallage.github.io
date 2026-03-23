import { useContext } from "react"

import { Context } from "../context/context"
import Projects from "../pages/projects"
import About from "../pages/about"
import Blog from "../pages/blog"


const Realisation = () => {

    const { setState } = useContext(Context)
    const cards = [
        {
            title: "Projets",
            description: "Une sélection de travaux concrets, avec captures et stack technique.",
            action: () => setState(<Projects />),
        },
        {
            title: "À propos",
            description: "Mon parcours, ma manière de travailler et ce que je cherche à construire.",
            action: () => setState(<About />),
        },
        {
            title: "Expériences",
            description: "Les contextes dans lesquels j'ai appris, livré et progressé.",
            action: () => setState(<Blog />),
        },
    ];

    return (
        <>
            <div className="mb-4 flex items-end justify-between">
                <span className="text-xl font-medium text-zinc-100">Navigation</span>
                <span className="text-sm text-zinc-400">3 sections principales</span>
            </div>
            <hr className="mb-4 border-zinc-800" />
            <div className="mt-4 grid gap-4 text-zinc-100 md:grid-cols-3">
                {cards.map((card) => (
                    <button
                        key={card.title}
                        type="button"
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition hover:border-zinc-700 hover:bg-zinc-900"
                        onClick={card.action}
                    >
                        <h3 className="text-base font-semibold">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            {card.description}
                        </p>
                    </button>
                ))}
            </div>
        </>
    )
}
export default Realisation;