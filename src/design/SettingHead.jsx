
function SettingHead({textHead, hint, icon: Icon}) {
    return (
        <div>
            <h2 className="p-1">
                {Icon && <Icon className="inline-block mr-2" />}
                {textHead}
            </h2>
            <span className="font-thin text-gray-400 mr-3">{hint}</span>
        </div>
    )
}

export default SettingHead
