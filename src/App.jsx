import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PatientLayout from './components/Patient/PatientLayout';
import AdminLayout from './components/Dashboard/AdminLayout';
import DoctorLayout from './components/Doctor/DoctorLayout';
import Home from './components/Patient/Home';
import Booking from './components/Patient/Booking';
import Specialist from './components/Patient/Specialist';
import PreviousVisits from './components/Patient/PreviousVisits';
import LoginLayout from './components/LoginLayout';
import Login from './components/Patient/Login';
import Register from './components/Patient/Register';
import Messages from './components/Patient/Messages';
import DoctorDetails from './components/Patient/DoctorDetails';
import MedicalAdvices from './components/Patient/MedicalAdvices';
import Advice from './components/Patient/Advice';
import CommonQuestions from './components/Patient/CommonQuestions';
import Questions from './components/Patient/Questions';
import Pharmacy from './components/Patient/Pharmacy';
import ProductsMedicine from './components/Patient/ProductsMedicine';
import MedicineDetials from './components/Patient/MedicineDetials';
import BrandProducts from './components/Patient/BrandProducts';
import Cart from './components/Patient/Cart';
import BrandCart from './components/Patient/BrandCart';
import HomeVisits from './components/Patient/HomeVisits';
// import Profile from './components/Profile';
// import Settings from './components/Settings';
// import About from './components/About';
// import Contact from './components/Contact';
// import Reports from './components/Reports';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/patient/home" />} />
                <Route path="/login" element={<LoginLayout />} >
                    <Route path="patient" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="/patient/*" element={<PatientLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="booking/specialist/:name" element={<Specialist />} />
                    <Route path="previous-visits/" element={<PreviousVisits />} />
                    <Route path="messages/" element={<Messages />} />
                    <Route path="booking/home-visits" element={<HomeVisits />} />
                    <Route path="doctor-details/" element={<DoctorDetails />} />
                    <Route path="medical-advices/" element={<MedicalAdvices />} />
                    <Route path="medical-advices/advice-details" element={<Advice />} />
                    <Route path="questions" element={<Questions />} />
                    <Route path="questions/more-questions" element={<CommonQuestions />} />
                    <Route path="pharmacy/" element={<Pharmacy/>} />
                    <Route path="pharmacy/more-medicine" element={<ProductsMedicine/>} />
                    <Route path="pharmacy/product" element={<MedicineDetials />} />
                    <Route path="pharmacy/brand" element={<BrandProducts />} />
                    <Route path="pharmacy/cart" element={<Cart />} />
                    <Route path="pharmacy/brand/cart" element={<BrandCart />} />

                    {/* <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="reports" element={<Reports />} /> */}
                </Route>

                <Route path="/admin/*" element={<AdminLayout />}>
                </Route>

                <Route path="/doctor/*" element={<DoctorLayout />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
