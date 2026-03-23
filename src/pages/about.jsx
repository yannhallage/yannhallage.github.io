import Button from "../components/button";
import { Context } from "../context/context";
import { useContext, useState } from "react";
import Alternative from "../alternative";


const About = () => {
    const { setState } = useContext(Context);
    const [mail] = useState(
        <i className="fa-solid fa-envelope"></i>
    )
    const [github] = useState(
        <i className="fa-brands fa-github"></i>
    )
    return (
        <section>
            <span className="text-base text-zinc-300 md:text-xl">À propos</span>
            <span className="float-end cursor-pointer text-base text-zinc-300"
                onClick={() => {
                    setState(
                        <Alternative />
                    );
                }}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </span>
            <hr className="mb-4 mt-1 border-zinc-800" />
            <div className="grid grid-cols-1 gap-5 p-1 md:grid-cols-2 md:p-3">
                <div className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 text-sm leading-relaxed text-zinc-300 md:text-base">
                    <div>
                        <p>
                            J&apos;ai commencé le développement web avec PHP, puis j&apos;ai progressivement élargi mon
                            champ d&apos;action vers des stacks modernes côté front et back. Cette évolution m&apos;a donné
                            une base solide pour livrer des applications complètes.
                        </p>
                    </div>
                    <div>
                        <p>
                            J&apos;apprécie particulièrement React et Vue pour construire des interfaces nettes,
                            simples à utiliser et faciles à maintenir. Côté serveur, j&apos;utilise surtout Node.js
                            avec Express pour des APIs claires et robustes.
                        </p>
                    </div>
                    <div>
                        <p>
                            Je m&apos;intéresse aussi à l&apos;architecture logicielle, au découpage des services et à la
                            qualité du code. Mon objectif reste toujours le même : proposer des solutions utiles,
                            stables et lisibles.
                        </p>
                    </div>
                    <div className="mt-2 flex flex-row flex-wrap gap-3">
                        <Button
                            style="group flex w-fit items-center space-x-2 rounded-md border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
                            text="GitHub"
                            icon={github}
                            link={() => { window.location.href = "https://github.com/yannhallage" }}
                        />
                        <Button
                            style="group flex w-fit items-center space-x-2 rounded-md border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
                            text="Contact"
                            icon={mail}
                            link={() => { window.location.href = "mailto:yannhallage2017@gmail.com" }}
                        />
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-zinc-200 sm:p-8">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-zinc-400">
                            <span className="h-2 w-2 rounded-full bg-zinc-400" />
                            Ce qui me définit
                        </div>

                        <div className="mt-5 flex-grow space-y-4">
                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                                <h3 className="text-sm font-semibold text-zinc-100">Approche produit</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    Je privilégie des interfaces sobres et une logique métier claire pour
                                    garder un produit compréhensible dans la durée.
                                </p>
                            </div>
                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                                <h3 className="text-sm font-semibold text-zinc-100">Travail actuel</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    Je développe des projets web full stack, en mettant l&apos;accent sur
                                    la performance, la fiabilité et la qualité du code.
                                </p>
                            </div>
                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                                <h3 className="text-sm font-semibold text-zinc-100">Objectif</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    Rejoindre des équipes exigeantes où je peux contribuer à des produits
                                    utiles et continuer à progresser techniquement.
                                </p>
                            </div>
                        </div>

                        <a
                            href="/cv-yann-hallage.pdf"
                            className="mt-6 w-fit rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 transition hover:bg-zinc-800"
                        >
                            Télécharger le CV
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About;