import { LuShoppingCart } from "react-icons/lu"
import image from "@/assets/bgpharmacy.png"
import Container from "@/design/Container"
import MedicineButton from "@/design/MedicineButton"
import Title from "@/design/title"
import Medicine from "@/design/Medicine"
import More from "@/design/more"
function MedicineDetials() {
    return (
        <div className="flex flex-col gap-4 m-4">
            <div className="flex gap-4">
                <Container className="w-4/6 rounded-full">
                    <Title text="تفاصيل المنتج" className="p-2 text-2xl font-bold" />
                    <div className="rounded-full">
                        <img src={image} alt="product-image" className="w-full p-5" />
                        <p className="text-[#909090] p-2 text-lg font-bold ">مجموعة فيتامينات ومعادن ، فيتامين سي، زنك وفيتامين دي</p>
                    </div>
                    <div className="flex justify-between p-3 items-center">
                        <p className="text-2xl font-bold">200 ج.م</p>
                        <div><MedicineButton text="اضافة لعربة التسوق" icon={LuShoppingCart} /></div>
                    </div>
                </Container>
                <Container className="w-2/6 p-2">
                    <div className="flex items-center gap-2">
                        <Title text="منتجات تجميل" className="m-0" />
                        <More text="المزيد" />
                    </div>
                    <Medicine text="299 ج.م" className="" />
                    <Medicine text="299 ج.م" className="" />
                </Container>
            </div>
            <Container className="py-1">
                <div className="flex items-center gap-2">
                    <Title text="منتجات مشابهة" className="mx-4" />
                    <More text="المزيد" />
                </div>
                <div className="flex w-full overflow-hidden gap-4 p-8">
                    <Medicine text="299 ج.م" />
                    <Medicine text="299 ج.م" />
                    <Medicine text="299 ج.م" />
                    <Medicine text="299 ج.م" />
                    <Medicine text="299 ج.م" />
                </div>
            </Container>
        </div>
    )
}

export default MedicineDetials
