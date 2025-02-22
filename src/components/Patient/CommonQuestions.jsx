import Container from "@/design/Container"
import Medicine from "@/design/Medicine";
import Title from "@/design/title"
import QuestionAnswer from "./QuestionAnswer";

function CommonQuestions() {
  return (
    <Container className="m-3" >
      <Title text="الاسئلة الشائعة" className="p-3" />
      <div className="flex flex-col gap-5 p-4 w-full">
        <QuestionAnswer
          question="طفل يعاني من الكحة والسخونة بشكل متكرر"
          response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
          doctor="د.امل علي" specialist="دكتور اطفال" asker="محمود محمد" />
        <QuestionAnswer
          question="طفل يعاني من الكحة والسخونة بشكل متكرر"
          response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
          doctor="د.امل علي" specialist="دكتور اطفال" asker="محمود محمد" />
        <QuestionAnswer
          question="طفل يعاني من الكحة والسخونة بشكل متكرر"
          response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
          doctor="د.امل علي" specialist="دكتور اطفال" asker="محمود محمد" />
      </div>

    </Container>
  )
}

export default CommonQuestions
