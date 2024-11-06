const SpecialistCard = ({icon,specialist}) => {

    return (
        <div className="flex flex-col items-center justify-center w-96 h-fit border border-gray-300 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-red-500">
                <img src={icon} alt={specialist} />
            </div>
            <p className="text-base mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">{specialist}</p>
        </div>
    );
};

export default SpecialistCard;
