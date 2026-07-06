import { Link } from 'react-router-dom';
import './SkillCard.styles.css';
import { useEffect, useRef } from 'react';

const SkillCard = ({ imgPath, name, progress, imgStyle, documentation, ...otherProps }) => {
    let progressColor;
    if (progress < 25) {
        progressColor = '#ff0000';
    } else if (progress < 50) {
        progressColor = '#ff9900';
    } else if (progress < 75) {
        progressColor = '#f7df2e';
    } else if (progress < 90) {
        progressColor = '#00ff00';
    } else {
        progressColor = '#00b7ff';
    }

    
    const Progress_bar = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-grow');
                }
                else {
                    entry.target.classList.remove('animate-grow');
                }
            },
            {
                threshold: 1,
            }
        );
        const current = Progress_bar.current;
        if (Progress_bar.current) {
            observer.observe(Progress_bar.current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [Progress_bar]);
    return (
        <Link  to={documentation} target='_blank' rel='noreferrer'
            className="shrink-0 skill-card flex flex-col items-center gap-3 p-3 rounded-sm shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)] w-[100px] sm:w-[150px] md:w-[200px]" {...otherProps}>
            <div className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px]" style={imgStyle}>
                <img src={imgPath} alt={name} className="h-full w-full rounded-xl" />
            </div>
            <div className="flex-1 flex flex-col justify-between w-full text-center">
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-normal sm:font-medium md:font-semibold font-Poppins mt-[-12px] mb-[2px] sm:mb-0 sm:mt-0">{name}</h2>
                <div ref={Progress_bar} className={`skill-progress w-full h-2 md:h-3 md:mt-2 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] relative`}
                    style={{ '--progress-width': `${progress}%`, '--progress-color': progressColor }}
                >
                </div>
            </div>
        </Link>
    );
}

export default SkillCard;