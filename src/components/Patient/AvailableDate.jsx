import Button from "../../design/Button"

function AvailableDate({ day, from,to,availability,className }) {
    const time="من 2:00 مساء حتي 10:00 مساءا"
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
