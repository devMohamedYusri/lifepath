import Button from "@/design/Button.jsx"

function AvailableDate({ day, from,to,availability,className }) {
    const time=" 2:00مساء 10:00مساء"
    return (
        <div className="w-fit p-1">

            <div className={`flex flex-col p-4 rounded-t-md gap-2 ${className}`}>
                <p className="text-center text-white">{day}</p>
                <p className="text-center text-white">{time}</p>
            </div>
            <Button text="احجز موعد الان " className="mt-0 rounded-t-none"/>
        </div>
    )
}

export default AvailableDate
