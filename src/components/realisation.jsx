

const Realisation = () => {
    return (
        <>
            <span className="text-xl text-white">Pages</span>
            <hr className="text-secondary/5 dark:text-white/5 mb-4" />
            <div className="mt-4 grid text-white md:grid-cols-2 grid-cols-1 gap-4">
                <div className="bg-white/5 p-4  rounded-xl">
                    <span>projects</span>
                    <p>
                        This is a project page
                    </p>
                </div>
                <div className="bg-white/5 p-4  rounded-xl">
                    <span>
                        about
                    </span>
                    <p>
                        This is an about page
                    </p>
                </div>
                <div className="bg-white/5 p-4  rounded-xl">
                    <span>
                        Experience
                    </span>
                    <p>
                        This is a contact page
                    </p>
                </div>
            </div>
        </>
    )
}
export default Realisation;