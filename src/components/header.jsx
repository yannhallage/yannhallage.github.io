

const Header = () => {
    return (
        <>
            <header className="p-5 container mx-auto">
                <div className="flex justify-between py-5 container mx-auto">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
                        </svg>
                    </div>
                    <div className="space-x-4 flex">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;