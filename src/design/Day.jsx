
function Day({day,date,isCurrent,selected}) {

  return (
    <div className={`flex flex-col rounded-xl justify-center p-2 w-fit shadow-md `} >
      <p className="border-b-[1px] border-black">{day}</p>
      <p className="text-center">{date}</p>
    </div>
  )
}

export default Day
