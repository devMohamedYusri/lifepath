import { Link } from "react-router-dom"
import image from "../assets/bgpharmacy.png"
import MedicineButton from "./MedicineButton"
function Medicine({text,className}) {
  return (
    <Link to="/patient/pharmacy/product" className={`w-64 border-2 border-gray-300 rounded-3xl flex-shrink-0 mb-3 ${className}`}>
      <img src={image} alt="medicine" className="p-3 w-full"/>
      <MedicineButton text={"299 ج.م" }/>
    </Link>
  )
}

export default Medicine
