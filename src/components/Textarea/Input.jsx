import { useState } from "react";

const Textarea = ({className, ...otherProps}) => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <textarea
            {...otherProps}
            value={value}
            onChange={onChange}
            rows={5}
            className={`min-w-[350px] w-[90%] border-2 border-[#2a2a2a] p-4 pt-3 pb-3  placeholder:text-[#616161]
            outline-none ${value ? 'bg-green-500' : 'bg-sky-300'} text-black text-xl font-Poppins rounded-sm
            focus:ring-[1px] focus:ring-black focus:bg-sky-500 shadow-[7px_7px_0px_1px_rgb(0,0,0)] ${className}`}
        />
    );
}

export default Textarea;