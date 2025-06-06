import { Link } from "react-router-dom"
import Chat from "@/design/Chat.jsx"
import Message from "@/design/Message.jsx"
import { IoSearchOutline } from "react-icons/io5"
import { BsSend } from "react-icons/bs"
import image from "@/assets/react.svg"

function Messages() {
    return (
        <div className=" flex  h-full gap-4 m-3 overflow-hidden no-scrollbar">
            <div className="w-3/4 flex-grow overflow-y-auto overflow-x-hidden "
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <Message text="أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة"
                    name="Dr. Smith"
                    currentUser="John" />

                <Message
                    text="شكراً دكتور"
                    name="John"
                    currentUser="John"
                    className="bg-[#93a5ec]"
                />
                <Message text="أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة"
                    name="Dr. Smith"
                    currentUser="John" />

                <Message
                    text="شكراً دكتور"
                    name="John"
                    currentUser="John"
                    className="bg-[#93a5ec]"
                />
                <Message text="أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة"
                    name="Dr. Smith"
                    currentUser="John" />

                <Message
                    text="شكراً دكتور"
                    name="John"
                    currentUser="John"
                    className="bg-[#93a5ec]"
                />

                <Message text="أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة"
                    name="Dr. Smith"
                    currentUser="John" />

                <Message
                    text="شكراً دكتور"
                    name="John"
                    currentUser="John"
                    className="bg-[#93a5ec]"
                />

                <Message text="أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة"
                    name="Dr. Smith"
                    currentUser="John" />

                <Message
                    text="شكراً دكتور"
                    name="John"
                    currentUser="John"
                    className="bg-[#93a5ec]"
                />
                <form className="sticky bottom-0 w-full flex justify-between rounded-md p-5 m-2 bg-white gap-3">
                    <img src={image} alt="sender" className="w-16 h-16"/>
                    <input
                        type="text"
                        placeholder="اكتب رسالة"
                        className="outline-none h-full w-full rounded-md bg-[#f4f4f4] p-6"
                    />
                    <button type="submit">
                        <BsSend className="w-10 h-10 transform -scale-x-100 text-[#BC181D]" />
                    </button>
                </form>

            </div>
            <div className="w-1/4 bg-white p-4 flex-grow overflow-y-auto "
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    }}>
                <h3>الرسائل</h3>
                <p className="text-xs">يمكنك الان التواصل مع طبيبك للمتابعة</p>
                <div className="flex items-center p-2 rounded-md w-full relative ">
                    <Link className="h-15 absolute">
                        <IoSearchOutline className="size-10  p-2 h-full transform -scale-x-100" />
                    </Link>
                    <input
                        type="text"
                        placeholder="ابحث عن رسالة او محادثة "
                        className="outline-none h-full w-full rounded-md bg-blue-100 px-8 p-2"
                    />
                </div>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
                <Chat name="دكتور خالد" text="اهلا بك هل الدواء ..."/>
            </div>
        </div>
    )
}

export default Messages