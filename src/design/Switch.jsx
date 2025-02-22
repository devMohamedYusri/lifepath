import { useState } from "react";

const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div
            className={`w-11 h-6 rounded-full p-0.5 cursor-pointer transition-colors flex-shrink-0 ${
                enabled ? "bg-[#4E70FB]" : "bg-[#121827]"
            } flex ${enabled ? "justify-end" : "justify-start"}`}
            onClick={() => setEnabled(!enabled)}
        >
            <div
                className="w-5 h-5 bg-white rounded-full shadow-md transition-all duration-200 flex-shrink-0"
            />
        </div>
    );
};

export default Switch;