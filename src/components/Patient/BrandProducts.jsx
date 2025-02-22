import { Link } from "react-router-dom"
import Button from "@/design/Button"
import Container from "@/design/Container"
import Title from "@/design/title"
import { IoSearchOutline } from "react-icons/io5"
import image from "@/assets/react.svg"
import Medicine from "@/design/Medicine"
function BrandProducts() {
    return (
        <div className="m-3 ">
            <Container className="rounded-xl p-2">
                <div>
                    <Title text="سوف يتم التوصيل من أقرب فرع لديكم في خلال ساعة كحد أقصى" className="px-2"/>
                </div>
                <form action="" className="flex items-center gap-5 mx-4 justify-between">
                    <div className="flex items-center border rounded-md w-3/6 relative h-full">
                        <Link className="h-15 absolute">
                            <IoSearchOutline className="size-10 p-2 h-full transform -scale-x-100" />
                        </Link>
                        <input
                            type="text"
                            placeholder="اكتب اسم الدواء الذي تبحث عنه "
                            className=" p-1.5 pr-14 outline-none h-full w-full rounded-md bg-gray-100"
                        />

                    </div>
                    <div className="flex items-center">
                        <Button text="اضافة روشتة" className="px-32 mb-1.5" type="button"/>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </form>
            </Container>
            <Container className="m-1 mt-3 p-3 ">
            <Title text="منتجات متوفرة في الصيدلية" className="font-bold text-3xl"/>
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
        </div>
    )
}

export default BrandProducts
