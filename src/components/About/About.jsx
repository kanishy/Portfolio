import './About.styles.css';
import Section from '../section.component';
import Button from '../button';
import { PiGithubLogoFill } from "react-icons/pi";
import RoundIcon from '../RoundIcons';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';

const About = () => {
    return (
        <Section className="bg-[url('/src/assets/stacked-waves-haikei.svg')] bg-cover flex flex-col items-center justify-center h-screen relative bg-position">
            <div className='w-[70%]'>
                <h1 className="text-7xl text-white font-Poppins">So who am i?</h1>
                <div className='flex flex-col gap-3 font-Open-sans'>
                    <p className="text-xl text-white">
                        Hello! I’m Kanhaiya Yadav, a passionate Full Stack Web Developer currently pursuing 
                        <span className='font-bold text-[#FFD700]'> B.Tech in Computer Science and Engineering</span>, specializing in data science. Expected to
                        graduate in 2026, I am deeply immersed in the world of web development, particularly
                        with the <span className='font-bold text-[#FFD700]'> MERN (MongoDB, Express.js, React, Node.js)</span> stack.</p>
                    <p className="text-xl text-white">
                        I thrive on the excitement of learning new technologies and pushing the boundaries of
                        my skills. My journey into web development has been driven by a love for creating seam
                        less, user-friendly applications that make a difference. From building dynamic,
                        responsive frontends to designing robust, scalable backends, I enjoy every aspect of the
                        development process.</p>
                    <p className="text-xl text-white">
                        I am excited about the future of web development and look forward to contributing to
                        innovative projects that make a positive impact. Let&apos;s build something amazing together
                        !</p>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <div className='flex items-center gap-5'>
                        <Button downloadLink={'/Kanhaiya Resume v4.pdf'} name={"Kanhaiya's resume"} className='text-white cursor-default hover:text-white'>My Resume</Button>
                        <Button>Contact Me</Button>
                    </div>
                    <div className='flex gap-5'>
                        <RoundIcon linkto={'https://www.linkedin.com/in/kanhaiya2004yadav/'}  className="hover:bg-white group"><FaLinkedinIn className='text-3xl text-white group-hover:text-[#0077B5]' /></RoundIcon>
                        <RoundIcon linkto={'https://github.com/kanishy'} className="hover:bg-black"><PiGithubLogoFill className='text-3xl text-white' /></RoundIcon>
                        <RoundIcon linkto={'https://www.facebook.com/profile.php?id=61563497158287'} className="hover:bg-[#1877F2]"><FaFacebookF className='text-3xl text-white' /></RoundIcon>
                        <RoundIcon linkto={'https://stackoverflow.com/users/22740986'} className="group hover:bg-white"><ImStackoverflow className='text-3xl text-white group-hover:text-[#F58025]' /></RoundIcon>
                    </div>
                </div>
            </div>

        </Section>
    );
};

export default About;