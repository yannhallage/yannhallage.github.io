import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header
            className="text-white mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto p-6 space-y-5">
                <div className="italic">
                    <span className="text-5xl font-bold">Yann Hallage</span>
                </div>
                <div className="text-3xl italic">
                    <span>Etudiant & Developpper informatique</span>
                </div>

                <div>
                    <p>
                        Logiciel d'Interfaces Humaine , conception full stack, architecture logiciel <br />
                        j’aime comprendre, concevoir et optimiser l’ensemble d’un système, de l’interface utilisateur à l’infrastructure technique.
                    </p>
                    <p className="mt-2">
                        Pendant mon temps libre, je partage ce que j'apprends sur mon blog
                    </p>

                    <div className="profil_link mt-4 space-x-5 flex text-[17px]">
                        <div className=" bg-dusk">
                            <img
                                src="/images/1720664211203.jpg"
                                className="rounded-full"
                                width={'50'}
                                alt="" />
                        </div>
                        <div className="mt-2 space-x-5">
                            <a href="">
                                <i className="fa-brands fa-github"></i>
                                <span className="ml-1">
                                    <a href="">GitHub</a>
                                </span>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-linkedin"></i>
                                <span className="ml-1">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
