const Header = () => {
    return (
        <>
            <header className="p-3 container mx-auto">
                <div className="container h-[90px] w-full flex items-center justify-between">
                    {/* Logo à gauche */}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15" // Exemple : icône de portfolio
                            />
                        </svg>
                    </span>

                    {/* Menu à droite */}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // Icône de menu hamburger
                            />
                        </svg>
                    </span>
                </div>
            </header>
        </>
    )
}
export default Header;