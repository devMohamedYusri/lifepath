import Container from "@/design/Container.jsx"
import Title from "@/design/Title.jsx"
import BlogCard from '@/components/Patient/BlogCard.jsx';

function MedicalAdvices() {
    return (
        <Container className="m-3 h-auto pb-3" >
            <Title text="بعض النصائح الطبية قد تهمك" className="p-3"/>
            <div className="flex flex-wrap gap-2 justify-center md:gap-4">
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
                <BlogCard/>
            </div>
        </Container>
    )
}

export default MedicalAdvices
