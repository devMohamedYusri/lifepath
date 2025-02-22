import Switch from "./Switch"

function SettingInput({ text, hint }) {
    return (
        <div className="flex items-center justify-between gap-4 mr-4 min-h-[60px] py-2">
            <div className="flex-1 min-w-0">
                <h2 className="p-1 text-sm sm:text-base">{text}</h2>
                <span className="font-thin text-gray-400 text-xs sm:text-sm">{hint}</span>
            </div>
            <div className="flex-shrink-0">
                <Switch />
            </div>
        </div>
    )
}

export default SettingInput