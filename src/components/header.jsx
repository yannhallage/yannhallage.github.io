

const Header = () => {
    return (
        <>
            <header className=" text-white mt-5">

                <div className="container mx-auto p-6 space-y-5 ">

                    <div className="italic">
                        <span className="text-5xl font-bold ">Yann Hallage</span>
                    </div>
                    <div className="text-3xl italic">
                        <span className="">Etudiant & Developpper informatique</span>
                    </div>

                    <div className="text-[#]">
                        <p>
                            I build open-source front-end libraries at Algolia and host two tech podcasts: Developer Experience
                            and Entre Devs.
                        </p>
                        <p className="mt-2">
                            In my spare time, I share what I learn on my blog and speak at tech conferences around the world
                        </p>

                        <div className="profil_link mt-4 space-x-5 text-[17px]">
                            <a href="">
                                <i class="fa-brands fa-github"></i>
                                <span className="ml-1">
                                    GitHub
                                </span>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-linkedin"></i>
                                <span className="ml-1">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;