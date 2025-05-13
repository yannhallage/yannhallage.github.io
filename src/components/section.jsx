import { iconMap }  from "../data/data"

const Section = () => {
    return (
        <>
            <section class="container mx-auto">
                <span class="text-2xl">Frontend</span>
                <div class="mt-4 grid md:grid-cols-3 grid-cols-1 gap-2">
                    <div class="container mx-auto p-4 bg-[#181818]  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <span class="text-2xl "><i class="fa-brands fa-html5"></i></span>
                        <span class="text-2xl"></span>
                        <p class="">
                            langage de balisage conçu pour représenter les pages web
                        </p>
                        <div class="mt-4 text-[13px] text-[#F6B17A]">
                            <span><i class="fa-solid fa-star"></i>  10</span> <span class="float-end">rates</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section;