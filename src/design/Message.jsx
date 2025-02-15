import image from '../assets/react.svg';

function Message({text,name,date,className,currentUser}) {
    const notCurrentUser = currentUser === name;

    return (
        <div className={`w-full flex justify-between rounded-md p-3 m-1 bg-white ${notCurrentUser ? 'flex-row-reverse' : 'flex-row'} ${className} `}>
            <div className={`flex ${notCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <img src={image} alt="sender" className="m-2 w-10 h-10 rounded-full border-2 border-gray-600"/>
                <div className={`flex flex-col gap-3 ${notCurrentUser?'items-end':"items-start"}`}>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-gray-600">أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة</p>
                </div>
            </div>
            <div className="self-end text-gray-300">
                3:42pm
            </div>
        </div>
    )
}

export default Message
