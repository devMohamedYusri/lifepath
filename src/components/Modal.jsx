import { useState } from "react";
import { IoMdClose } from "react-icons/io"

function Modal() {
    const [OpenAll, setOpenAll] = useState(false);

    const toggleModal=()=>{
        setOpenAll(false);
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen">
                <div className=" shadow-xl rounded-lg w-full max-w-md mx-auto p-6 bg-[#889bea] text-white">
                    <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-bold">Sample Popup</h2>
                        <button
                            className="text-gray-600 hover:text-gray-950 size-8"
                            onClick={toggleModal}
                        >
                            <IoMdClose className="size-8" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>This is a sample popup content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
