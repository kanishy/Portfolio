import { useState, useEffect, useRef } from "react";
import './ProjectCard.styles.css';
import { FaEye } from 'react-icons/fa';
import { LuCode2 } from "react-icons/lu";
import Technology from "../technology";
import { technologies as techs } from "../ProjectDirectory/ProjectData";

const ProjectCard = ({ project }) => {
    const { path, imgPath, title, description, preview, source, technologies } = project;
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // observer.disconnect();
                }
                else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const reference = divRef.current;

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (reference) {
                observer.unobserve(reference);
            }
        };
    }, []);
    return (
        <div ref={divRef} className={`fade-in ${isVisible ? 'visible' : ''} project-card flex flex-col items-center
         mt-10 xl:mt-0 flex-1 sm:gap-5 p-[10px] sm:p-4 box-content rounded-lg shadow-[10px_10px_0px_1px_rgb(0,0,0)]
          border-[3px] border-black max-w-[220px] sm:max-w-[265px] md:max-w-[680px] xl:min-w-[510px]
           xl:w-[43%] max-h-[350px] overflow-auto xl:odd:ml-auto`}
            style={{
                background: 'linear-gradient(145deg, #00101c, #642d19)'
            }}
        >
            <div className="z-10 flex flex-col md:flex-row gap-5 w-full">
                <div className={`shrink-0 w-[220px] h-[120px] sm:w-[260px] sm:h-[160px] rounded-lg overflow-hidden border-2 border-black group`}
                    style={{
                        backgroundImage: `url(/${path})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="hidden group-hover:flex items-center justify-center gap-2 w-full h-full bg-[#00000089]">
                        <a className={`text-black hover:text-black text-3xl bg-white rounded-full p-2`} href={preview} target="_blank" rel="noreferrer"><FaEye /></a>
                        <a className={`text-black hover:text-black text-3xl bg-white rounded-full p-2`} href={source} target="_blank" rel="noreferrer"><LuCode2 /></a>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mt-2">
                            <div className="w-[40px] h-[40px] border-2 border-[#c54d20] rounded-full overflow-hidden p-1 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.9)]">
                            <img src={`/${imgPath}`} alt="icon" className="h-full rounded-full" />
                        </div>
                        <h2 className="text-2xl font-semibold text-[#c54d20]">{title}</h2>
                    </div>
                    <div className="text-container max-h-[110px] overflow-hidden  mb-3 hover:max-h-full transition-all duration-300">
                        <p className="text-ellipsis-custom text-sm sm:text-lg text-white font-Poppins">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex w-[95%] flex-1 gap-2 flex-wrap">
                {
                    technologies.map((tech, index) => (
                        <Technology key={index} tech={techs[tech]} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectCard;