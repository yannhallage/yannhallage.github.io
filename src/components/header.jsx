const Header = () => {
    return (
        <header className="mt-6 text-zinc-100">
            <div className="container mx-auto rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
                <div className="mb-3 inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-xs tracking-wide text-zinc-300">
                    Portfolio
                </div>
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        Yann Hallage
                    </h1>
                    <p className="text-lg text-zinc-300 md:text-xl">
                        Étudiant en informatique et développeur full stack
                    </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                    <div className="space-y-4 text-zinc-300">
                        <p>
                            Je construis des applications web claires, rapides et maintenables.
                            J&apos;aime autant travailler l&apos;expérience utilisateur côté interface
                            que la structure technique côté back-end.
                        </p>
                        <p>
                            Mon objectif : livrer des produits utiles, bien pensés et faciles à faire évoluer.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                            <span className="rounded-md border border-zinc-700 px-2 py-1">Basé en Côte d&apos;Ivoire</span>
                            <span className="rounded-md border border-zinc-700 px-2 py-1">Disponible pour des projets web</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-5 text-sm">
                            <a
                                href="https://github.com/yannhallage"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-zinc-200 transition hover:text-white"
                            >
                                <i className="fa-brands fa-github" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yannhallage/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-zinc-200 transition hover:text-white"
                            >
                                <i className="fa-brands fa-linkedin" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:justify-self-end">
                        <div className="w-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-2">
                            <div className="rounded-xl border border-zinc-700 p-1">
                                <img
                                    src="/images/1720664211203.jpg"
                                    className="rounded-full"
                                    width="72"
                                    alt="Portrait de Yann Hallage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
