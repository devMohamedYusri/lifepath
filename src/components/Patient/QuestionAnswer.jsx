import Question from "@/components/Patient/Question.jsx"
import Answer from "@/components/Patient/Answer.jsx"

function QuestionAnswer({question,specialist,response,doctor,asker,className}) {
  return (
    <div className={`border-2 border-gray-300  p-3 ${className}`}>
       <Question asker={asker} question={question} className={className}/>
        <Answer specialist={specialist} response={response} doctor={doctor} className={className}/>
      </div>
  )
}

export default QuestionAnswer
