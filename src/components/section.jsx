
import {
    Frontend_, iconMap, Tools, Tools_,
    Database, Database_, Backend, Backend_
} from "../data/data";

const Section = () => {
    const categories = [
        { title: "Frontend", items: Frontend_, icons: iconMap },
        { title: "Backend", items: Backend_, icons: Backend },
        { title: "Outils", items: Tools_, icons: Tools },
        { title: "Base de données", items: Database_, icons: Database },
    ];

    return (
        <>
            <section className="space-y-10">
                {categories.map((category) => (
                    <div key={category.title}>
                        <span className="text-base text-zinc-300 md:text-xl">{category.title}</span>
                        <hr className="mb-4 mt-1 border-zinc-800" />
                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                            {category.items.map((tech) => (
                                <div
                                    key={`${category.title}-${tech}`}
                                    className="flex items-center space-x-4 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950">
                                        <img
                                            src={category.icons[tech]}
                                            alt={tech}
                                            className="h-6 w-6 object-contain"
                                        />
                                    </div>
                                    <span className="capitalize text-zinc-200">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Section;
