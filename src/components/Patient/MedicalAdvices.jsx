import Container from "../../design/Container"
import Title from "../../design/title"
import BlogCard from './BlogCard';

function MedicalAdvices() {
    return (
        <Container className="m-3" >
            <Title text="بعض النصائح الطبية قد تهمك" className="p-3"/>
            <div className="flex flex-wrap gap-3 justify-center">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </Container>
    )
}

export default MedicalAdvices
