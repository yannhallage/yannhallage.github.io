

function Section() {

    return (
        <>
            <main>
                <section className="flex flex-col md:flex-row-reverse md:justify-between container my-14">
                    <img src="https://res.cloudinary.com/dm8qh4w9a/image/upload/w_384/dec7b6e1-0f97-4c1b-8066-96c5b2afc9b3" width="150" height="185" decoding="async" data-nimg="1"
                        className="w-full h-fit max-w-[90px] md:max-w-[135px] lg:max-w-[150px] l:w-1/2 mb-4" />
                </section>
                <div className="content md:w-3/5">
                    <h1 className="mb-2">Amir <span className="text-light-primary dark:text-primary">Akbulut</span>,
                        <br /> full-stack developer</h1><p className="dark:text-grey-light-900 md:text-largest">Als full-stack Javascript developer bouw ik moderne web-apps met tools als <a target="_blank" href="https://reactjs.org/">React.js</a>, <a target="_blank" href="https://nextjs.org/">Next.js</a> &amp; <a target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a>.</p></div>
            </main>
        </>
    )
}

export default Section;
