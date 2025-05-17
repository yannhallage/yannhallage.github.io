import Button from "../components/button";
import { motion } from "motion/react"
import { Context } from "../context/context";
import { useContext, useState } from "react";
import Alternative from "../alternative";


const About = () => {
    const { state, setState } = useContext(Context);
    const [mail] = useState(
        <i class="fa-solid fa-envelope"></i>
    )
    const [github] = useState(
        <i className="fa-brands fa-github"></i>
    )
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}

        >
            <span className=" text-[13px]md:text-2xl text-base text-neutral-300">About</span>
            <motion.span className=" text-[13px]md:text-2xl text-base float-end cursor-pointer text-neutral-300"
                onClick={() => {
                    setState(
                        <Alternative />
                    );
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <i class="fa-solid fa-arrow-left"></i>
            </motion.span>
            <hr className="text-secondary/5 dark:text-white/5 mb-4" />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-5">
                <div className="space-y-5 md:p-4 text-[15px] text-base text-white" style={{fontFamily :'sans-serif'}}>
                    <div>
                        <p>
                            J’ai commencé mon parcours en développement avec PHP, ce qui m’a permis de poser des bases solides en programmation web. Très vite, ma curiosité m’a poussé à explorer d'autres technologies, découvrant ainsi tout le potentiel offert par des outils plus modernes et performants
                        </p>
                    </div>
                    <div>
                        <p>
                            Côté front-end, j’ai travaillé avec des frameworks comme React et Vue.js, qui offrent une grande souplesse pour concevoir des interfaces dynamiques et réactives. Côté back-end, je me suis orienté vers Express.js et AdonisJS, qui permettent de structurer des applications robustes et maintenables.
                        </p>
                    </div>
                    <div>
                        <p>
                            Mon intérêt ne s’arrête pas aux technologies web classiques : j’ai également exploré des langages comme Java et Go, dont la puissance et la rigueur, notamment dans des contextes à forte charge, m’impressionnent particulièrement.
                        </p>
                    </div>
                    <div>
                        <p>
                            Ce qui me passionne aujourd’hui, c’est surtout l’architecture système et l’expertise autour des protocoles de communication en temps réel. Comprendre comment les données circulent efficacement entre les services, optimiser les échanges, et concevoir des solutions scalables et réactives est ce qui me motive le plus dans mon évolution professionnelle.
                        </p>
                    </div>
                    {/*  */}
                    <div className="mt-6 flex flex-row flex-wrap gap-4">
                        <Button
                            style={"group flex text-[17px] w-fit space-x-2 cursor-pointer items-center rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-blue-500 text-white hover:bg-blue-600"}
                            text={" Github"}
                            icon={github}
                        />
                        <Button
                            style={"group flex w-fit text-[17px] space-x-2 cursor-pointer items-center rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"}
                            text={"Contact"}
                            icon={mail}
                        />
                    </div>
                </div>
                {/*  */}
                <div className="mt-8 md:mt-0" style={{ opacity: 1, transform: "none" }}>
                    <div className="p-6 sm:p-8 border border-[#333] rounded-3xl bg-[#111111] text-white shadow-2xl flex flex-col h-full">
                        <div className="text-white uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base">
                            <span className="bg-[#FF3B00] p-1.5 rounded-md">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    color="#FFFFFF"
                                    style={{ color: "#FFFFFF" }}
                                    height="20"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path>
                                </svg>
                            </span>
                            My Studio
                        </div>

                        <div className="mt-4 flex-grow">
                            <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4">
                                Namaste!🙏 suhaib.dev is more than a portfolio; it's a window into my world, where passion meets purpose. Discover my work.
                            </p>
                        </div>

                        <button
                            className="text-sm mt-3 bg-[#1a1a1a] border border-[#333] px-5 py-2 rounded-full hover:bg-[#111111A0] transition-colors duration-300 w-fit"
                            tabIndex={0}
                            style={{ transform: "none" }}
                        >
                            Download CV
                        </button>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 gap-4" style={{ opacity: 1, transform: "none" }}>
                            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex flex-col items-start">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    className="text-[#FF3B00] mb-2"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                                </svg>
                                <h3 className="font-semibold text-white text-base mb-1">Web Development</h3>
                                <p className="text-sm text-gray-400">Building high-performance websites with clean code and strong SEO fundamentals.</p>
                            </div>

                            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex flex-col items-start">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-[#FF3B00] mb-2"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path>
                                </svg>
                                <h3 className="font-semibold text-white text-base mb-1">Architect software</h3>
                                <p className="text-sm text-gray-400">Crafting modern, intuitive user interfaces that engage and convert users.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}
export default About;