import image from '../../assets/react.svg'
import DoctorRatingStars from '../../design/DoctorRating'
function RatingCard({ className }) {
    return (
        <div className={`w-full flex justify-between rounded-md p-1 m-2 bg-gray-200 ${className} `}>
            <div className={`flex`}>
                <img src={image} alt="sender" className="m-2 w-10 h-10 rounded-full border-2 border-gray-600" />
                <div className={`flex flex-col gap-3 `}>
                    <h3 className="font-semibold">خالد</h3>
                    <p className="text-gray-600">أهلا ،يمكنك تبديل الدواء لجرعتين في اليوم بدلا من جرعة واحدة</p>
                </div>
            </div>
            <div className=" justify-between relative h-full">
                <div className="absolute top-2 -left-12">
                    <DoctorRatingStars rating={4.5} />
                </div>
            </div>
            <div className="self-end text-gray-400">
                3:42pm
            </div>
        </div>
    )
}

export default RatingCard
