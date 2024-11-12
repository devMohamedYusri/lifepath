import Container from "../../design/Container"
import image from '../../assets/bgpharmacy.png'
import { CgCloseR } from "react-icons/cg"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
function CartCard() {
    return (
        <Container className="flex rounded-xl p-4 border-2 border-[#D9D9D9]">
            <img src={image} alt="product-image" className="w-[329px] h-[240px]  rounded-xl" />
            <div className="flex flex-col p-3 w-3/4">
                <h4 className="font-bold text-lg pb-6 size-[30px] w-full">مجموعة فيتامينات</h4>
                <p className="p-4 px-0 text-[#909090]"
                >مجموعة فيتامينات ومعادن ، فيتامين سي، زنك وفيتامين دي
                    مجموعة فيتامينات ومعادن ، فيتامين سي،
                    زنك وفيتامين دي
                    مجموعة فيتامينات ومعادن ، فيتامين سي، زنك وفيتامين ديمجموعة
                    فيتامينات ومعادن ، فيتامين سي، زنك وفيتامين دي
                </p>
                <span className="font-bold text-lg mt-auto">400 ج.م</span>
            </div>
            <div className="flex gap-4 w-1/4 items-end">
                <div className="flex items-center  gap-2 p-1 px-3 border-2 border-[#909090] rounded-3xl w-fit h-fit">
                    <button className="">
                        <CiCircleMinus className="text-[#4E70FB] font-bold text-4xl" />
                    </button>
                    <p>1</p>
                    <button className="">
                        <CiCirclePlus className="text-[#4E70FB] font-bold text-4xl" />
                    </button>
                </div>
                <button className="">
                    <CgCloseR className="text-[#BC181D] font-bold text-3xl mb-2" />
                </button>
            </div>
        </Container>
    )
}

export default CartCard
