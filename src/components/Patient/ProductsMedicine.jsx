import Container from "@/design/Container.jsx"
import Medicine from "@/design/Medicine.jsx"
import Title from "@/design/Title.jsx"

function ProductsMedicine() {
    return (
        <Container className="m-4 p-3 ">
            <Title text="منتجات اخري" className="font-bold text-3xl"/>
            <div className="flex flex-wrap gap-4 justify-center">
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
            </div>
        </Container>
    )
}

export default ProductsMedicine
