const SpecialistCard = () => {
    const icon = '🩺'; 
    const text = 'طبيب الأسرة'; 

    return (
        <div className="flex flex-col items-center justify-center w-fit h-fit border border-gray-300 rounded-lg py-5 px-8 shadow-sm">
            <div className="text-4xl text-red-500">{icon}</div>
            <p className="text-base mt-2 text-center">{text}</p>
        </div>
    );
};

export default SpecialistCard;
