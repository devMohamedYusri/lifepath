import Container from "@/design/Container"
import image from "@/assets/react.svg"
import Title from "@/design/title"
import CartCard from "@/components/Patient/CartCard"
import MedicineButton from "@/design/MedicineButton"
function BrandCart() {
    return (
        <div className="m-3">
            <Container className="p-5 rounded-xl pt-2 flex flex-col gap-2" >
                <h4 className="font-bold text-xl">سوف يتم التوصيل من أقرب فرع لديكم في خلال ساعة كحد أقصى</h4>
                <div className="flex justify-between">
                    <p className="text-[#909090]">قم بمراجعة قائمة مشترياتك قبل التأكيد</p>
                    <img src={image} alt="image brand" />
                </div>
            </Container>
            <div className="flex flex-col gap-4 items-center">
                <Title text="قائمة المشتريات " className="font-bold self-start " />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <div className="w-fit">
                    <MedicineButton text="تاكيد الطلب" className=" mb-10 px-32 hover:bg-[#4E70FB]" />
                </div>
            </div>
        </div>
    )
}

export default BrandCart
