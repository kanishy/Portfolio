import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import './Skills.styles.css';
import {webDev, programmingLanguages, tools} from './SkillData';

const Skills = () => {
    return (
        <section id="skills" className="overflow-x-hidden w-screen bg-no-repeat bg-[url('/layered-waves-haikei.svg')] bg-cover flex flex-col gap-10 items-start justify-center min-h-screen bg-position p-10 pt-20">
            <h1 className="text-4xl md:text-5xl  ml-10 text-white font-Poppins">My Skillset</h1>
            <SkillDirectory skill={webDev} />
            <SkillDirectory skill={programmingLanguages} />
            <SkillDirectory skill={tools} />
        </section>
    );
}

export default Skills;