import Question from "./Question"
import Answer from "./Answer"

function QuestionAnswer({question,specialist,response,doctor,asker,className}) {
  return (
    <div className={`border-2 border-gray-300  p-3 ${className}`}>
       <Question asker={asker} question={question} className={className}/>
        <Answer specialist={specialist} response={response} doctor={doctor} className={className}/>
      </div>
  )
}

export default QuestionAnswer