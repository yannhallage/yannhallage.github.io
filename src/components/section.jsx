import { useEffect, useState } from "react";
import { iconMap } from "../data/data";
import { Frontend_ } from "../data/data";

const Section = () => {
    const [valeur, setValeur] = useState({});

    useEffect(() => {
        console.log(iconMap);
    }, []);

    return (
        <>
            <div className="">
                <span className="text-2xl text-white">Frontend</span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                <div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-2">
                    {
                        Frontend_.map((icon, index) => (
                            <span key={index}>
                                {icon}
                            </span>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Section;
