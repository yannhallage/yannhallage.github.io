
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"


const Realisation = () => {
    const navigate = useNavigate()
    return (
        <>
            <span className="text-xl text-white">Pages</span>
            <hr className="text-secondary/5 dark:text-white/5 mb-4" />
            <motion.div className="mt-4 grid text-white md:grid-cols-2 grid-cols-1 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="bg-white/5 p-6  rounded-xl"
                    onClick={() => {
                        navigate('/Projects');
                    }}
                >
                    <span>Projects</span>
                    <p>
                        This is a blog page
                    </p>
                </div>
                <div className="bg-white/5 p-6  rounded-xl"
                    onClick={() => {
                        navigate('/About');
                    }}
                >
                    <span>
                        about
                    </span>
                    <p>
                        This is an about page
                    </p>
                </div>
                <div className="bg-white/5 p-6  rounded-xl"
                    onClick={() => {
                        navigate('/blog');
                    }}
                >
                    <span>
                        Experience
                    </span>
                    <p>
                        This is a contact page
                    </p>
                </div>
            </motion.div>
        </>
    )
}
export default Realisation;