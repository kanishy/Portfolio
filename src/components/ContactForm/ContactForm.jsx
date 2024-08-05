import Input from "../Input/Input";
import Textarea from "../Textarea/Input";
import { IoSend } from "react-icons/io5";
import { useState } from "react";


const ContactForm = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: ""
    });
    const onChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue({
            name: "",
            email: "",
            message: ""
        });
    };
    return (
        <form onSubmit={handleSubmit} className="shrink w-[45%] min-w-[400px] h-full flex flex-col items-center gap-5 bg-[#5644b8] rounded-2xl p-10">
            <h1 className="font-Abril-Fatface"><span className="text-7xl text-[rgba(255,255,255,0.3)]">Contact</span><span className="text-red-500 font-Great-Vibes text-7xl">Me</span></h1>
            <Input value={value.name} name='name' type='text' placeholder='Your Name' required onChange={onChange}/>
            <Input value={value.email} name='email' type='email' placeholder='Your email' required onChange={onChange}/>
            <Textarea value={value.message} name='message' placeholder='Your message here ...' onChange={onChange} />
            <button type="submit" className="flex items-center gap-2 cursor-default bg-[#aa00aa] text-white hover:text-white rounded-lg p-3 shadow-[5px_5px_0px_1px_rgba(0,0,0)] hover:bg-blue-600 hover:scale-110 transition-[transform] border-2 border-black text-lg">Send Message <IoSend /></button>
        </form>
    );
};

export default ContactForm;