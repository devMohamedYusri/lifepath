import MedicineButton from "@/design/MedicineButton.jsx"
import Title from "@/design/Title.jsx"
import CartCard from "@/components/Patient/CartCard"

function Cart() {
    return (
        <div className="flex flex-col gap-4 m-4 items-center">
            <Title text="قائمة المشتريات " className="font-bold self-start "/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <div className="w-fit">
            <MedicineButton text="تاكيد الطلب" className=" mb-10 px-32 hover:bg-[#4E70FB]"/>
            </div>
        </div>
    )
}

export default Cart
