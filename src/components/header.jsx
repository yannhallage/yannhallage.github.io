

const Header = () => {
    return (
        <>
            <header className=" text-white animate__animated animate__fadeInDown mt-5">

                <div className="container mx-auto p-6 space-y-5 ">

                    <div className="italic">
                        <span className="text-5xl font-bold ">Yann Hallage</span>
                    </div>
                    <div className="text-3xl italic">
                        <span className="">Etudiant & Developpper informatique</span>
                    </div>

                    <div className="">
                        <p>
                            I build open-source front-end libraries at Algolia and host two tech podcasts: Developer Experience
                            and Entre Devs.
                        </p>
                        <p className="mt-2">
                            In my spare time, I share what I learn on my blog and speak at tech conferences around the world
                        </p>

                        <div className="profil_link mt-4 space-x-5 text-[17px]">
                            <a className="navbar-brand " id="im" href="#">
                                <img src="WhatsApp Image 2024-05-06 à 02.14.39_d3d98717.jpg" id="profil" name="pic" alt="" />
                            </a>
                            <a href="https://www.instagram.com/thisisyannhallage/"><span className=""><i className="fa-brands fa-square-instagram"></i></span> <span className="ml-2">Instagram</span> <span className="text-[9px]"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span></a>
                            <a href="https://snapchat.com/add/pxnd3monuim"><span className=""><i className="fa-brands fa-square-snapchat"></i></span> <span className="ml-2">Snap</span> <span className="text-[9px]"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></span></a>
                            <a href="" className="float-end  rounded pr-2 pl-2 m-3 cursor-default" id="coding"><span className="text-yellow-200"><i className="fa-solid fa-check-double"></i> | <span>18</span></span></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;